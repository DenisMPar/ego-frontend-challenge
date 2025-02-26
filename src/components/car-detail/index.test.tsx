import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render, renderHook, waitFor } from "@testing-library/react";
import nock from "nock";
import { MemoryRouter } from "react-router";
import { CarDetailComponent } from ".";
import { useGetCarDetails } from "../../hooks/cars";
import { API_URL } from "../../lib/api";
import { mockCarFeatures } from "../../lib/mocks";

describe("car-detail", () => {
  //mock del useInView para que siempre se muestre el componente
  vi.mock("framer-motion", async () => {
    const actual = await vi.importActual("framer-motion");
    return {
      ...actual,
      useInView: vi.fn(() => true),
    };
  });
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
      <MemoryRouter initialEntries={["/model/1"]}>{children}</MemoryRouter>
    </QueryClientProvider>
  );

  it("should render skeletons on loading", async () => {
    const expectation = nock(API_URL)
      .get("/models/1")
      .reply(200, mockCarFeatures);

    const { result } = renderHook(() => useGetCarDetails("1"), { wrapper });

    await waitFor(() => expect(result.current.isLoading).toBe(true));

    const { getByRole } = render(<CarDetailComponent />, { wrapper });

    await waitFor(() => expect(getByRole("status")).toBeInTheDocument());

    expectation.done();
  });

  it("should render error", async () => {
    const expectation = nock(API_URL).get("/models/1").reply(500);
    const { result } = renderHook(() => useGetCarDetails("1"), { wrapper });

    const { getByText } = render(<CarDetailComponent />, { wrapper });

    await waitFor(() => expect(result.current.isError).toBe(true));
    await waitFor(() =>
      expect(
        getByText("Error al cargar los detalles del auto")
      ).toBeInTheDocument()
    );

    expectation.done();
  });

  it("should render car details", async () => {
    const expectation = nock(API_URL)
      .get("/models/1")
      .reply(200, mockCarFeatures);

    const { result } = renderHook(() => useGetCarDetails("1"), { wrapper });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));

    const { getByText } = render(<CarDetailComponent />, {
      wrapper,
    });

    await waitFor(() => {
      expect(getByText("Corolla")).toBeInTheDocument();
      expect(getByText("Nuevo Corolla, siempre adelante.")).toBeInTheDocument();
    });

    expectation.done();
  });
});
