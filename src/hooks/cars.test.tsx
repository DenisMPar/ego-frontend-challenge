import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { renderHook, waitFor } from "@testing-library/react";
import nock from "nock";
import { API_URL } from "../lib/api";
import { mockCarFeatures, mockModelsData } from "../lib/mocks";
import { useGetCarDetails, useGetCars, useGetFileteredCars } from "./cars";

describe("hooks", () => {
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
  });

  const wrapper = ({ children }: { children: React.ReactNode }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
  describe("useGetCars", () => {
    it("should fetch and return car models", async () => {
      const expectation = nock(API_URL)
        .get("/models")
        .reply(200, mockModelsData);

      const { result } = renderHook(() => useGetCars(), { wrapper });

      await waitFor(() => expect(result.current.isSuccess).toBe(true));

      expect(result.current.cars).toEqual(mockModelsData);
      expectation.done();
    });
    it("should fetch and return error", async () => {
      const expectation = nock(API_URL).get("/models").reply(500);

      const { result } = renderHook(() => useGetCars(), { wrapper });

      await waitFor(() => expect(result.current.isError).toBe(true));

      expect(result.current.isError).toBe(true);
      expectation.done();
    });
  });

  describe("useGetCarDetails", () => {
    it("should fetch and return car features", async () => {
      const expectation = nock(API_URL)
        .get("/models/1")
        .reply(200, mockCarFeatures);

      const { result } = renderHook(() => useGetCarDetails("1"), { wrapper });

      await waitFor(() => expect(result.current.isSuccess).toBe(true));

      expect(result.current.carDetails).toEqual(mockCarFeatures);
      expectation.done();
    });
    it("should return cars filtered by type: all", async () => {
      const { result } = renderHook(
        () =>
          useGetFileteredCars({
            cars: mockModelsData,
            typeFilter: "all",
            sortOption: "asc",
          }),
        { wrapper }
      );

      expect(result.current).toEqual(mockModelsData);
    });
  });

  describe("useGetFileteredCars", () => {
    it("should return cars filtered by type: cars", async () => {
      const { result } = renderHook(() =>
        useGetFileteredCars({
          cars: mockModelsData,
          typeFilter: "cars",
          sortOption: "asc",
        })
      );

      expect(result.current).toEqual(
        mockModelsData.filter(
          (car) => car.segment === "Sedan" || car.segment === "Hatchback"
        )
      );
    });

    it("should return cars filtered by type: pickups", async () => {
      const { result } = renderHook(() =>
        useGetFileteredCars({
          cars: mockModelsData,
          typeFilter: "pickups",
          sortOption: "asc",
        })
      );

      expect(result.current).toEqual(
        mockModelsData.filter((car) => car.segment === "Pickups y Comerciales")
      );
    });

    it("should return cars filtered by type: suv", async () => {
      const { result } = renderHook(() =>
        useGetFileteredCars({
          cars: mockModelsData,
          typeFilter: "suv",
          sortOption: "asc",
        })
      );

      expect(result.current).toEqual(
        mockModelsData.filter((car) => car.segment === "SUVs")
      );
    });

    it("should return cars sorted by price: asc", async () => {
      const { result } = renderHook(() =>
        useGetFileteredCars({
          cars: mockModelsData,
          typeFilter: "all",
          sortOption: "asc",
        })
      );

      expect(result.current).toEqual(
        mockModelsData.sort((a, b) => a.price - b.price)
      );
    });

    it("should return cars sorted by price: des", async () => {
      const { result } = renderHook(() =>
        useGetFileteredCars({
          cars: mockModelsData,
          typeFilter: "all",
          sortOption: "des",
        })
      );

      expect(result.current).toEqual(
        mockModelsData.sort((a, b) => b.price - a.price)
      );
    });

    it("should return cars sorted by year: new", async () => {
      const { result } = renderHook(() =>
        useGetFileteredCars({
          cars: mockModelsData,
          typeFilter: "all",
          sortOption: "new",
        })
      );

      expect(result.current).toEqual(
        mockModelsData.sort((a, b) => b.year - a.year)
      );
    });

    it("should return cars sorted by year: old", async () => {
      const { result } = renderHook(() =>
        useGetFileteredCars({
          cars: mockModelsData,
          typeFilter: "all",
          sortOption: "old",
        })
      );

      expect(result.current).toEqual(
        mockModelsData.sort((a, b) => a.year - b.year)
      );
    });
    it("should return empty array when cars is undefined", async () => {
      const { result } = renderHook(() =>
        useGetFileteredCars({
          cars: undefined,
          typeFilter: "all",
          sortOption: "asc",
        })
      );

      expect(result.current).toEqual([]);
    });
  });
});
