import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render, renderHook, waitFor } from "@testing-library/react";
import nock from "nock";
import { MemoryRouter } from "react-router";
import { HomeComponent } from ".";
import { useGetCars } from "../../hooks/cars";
import { API_URL } from "../../lib/api";
import { mockModelsData } from "../../lib/mocks";

describe("home", () => {
  let queryClient: QueryClient;
  beforeEach(() => {
    queryClient = new QueryClient({
      defaultOptions: {
        queries: {
          retry: false,
        },
      },
    });
  });

  afterEach(() => {
    queryClient.clear();
    nock.cleanAll();
  });

  const wrapper = ({ children }: { children: React.ReactNode }) => (
    <QueryClientProvider client={queryClient}>
      <MemoryRouter>{children}</MemoryRouter>
    </QueryClientProvider>
  );
  it("should render", async () => {
    const expectation = nock(API_URL).get("/models").reply(200, mockModelsData);
    const { result } = renderHook(() => useGetCars(), { wrapper });

    await waitFor(() => expect(result.current.isLoading).toBe(true));
    const { getByText } = render(<HomeComponent />, { wrapper });
    expect(getByText("Descubrí todos los modelos")).toBeInTheDocument();
    expectation.done();
  });

  it("should render skeletons on loading", async () => {
    const expectation = nock(API_URL)
      .get("/models")
      .reply(200, { data: "random" });
    const { getByRole } = render(<HomeComponent />, { wrapper });

    await waitFor(() => expect(getByRole("status")).toBeInTheDocument());

    expectation.done();
  });

  it("should render error", async () => {
    const expectation = nock(API_URL).get("/models").reply(500);

    const { getByText } = render(<HomeComponent />, { wrapper });

    await waitFor(() =>
      expect(
        getByText("Hubo un error al cargar los modelos :(")
      ).toBeInTheDocument()
    );

    expectation.done();
  });

  it("should render car list", async () => {
    const expectation = nock(API_URL).get("/models").reply(200, mockModelsData);

    const { result } = renderHook(() => useGetCars(), { wrapper });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));

    const { findByRole } = render(<HomeComponent />, {
      wrapper,
    });

    const list = await findByRole("list");
    expect(list).toBeInTheDocument();

    mockModelsData.forEach((model) => {
      expect(list).toHaveTextContent(model.name);
    });

    expectation.done();
  });
});
