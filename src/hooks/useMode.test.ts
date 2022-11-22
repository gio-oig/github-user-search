import { renderHook, act } from "@testing-library/react-hooks";
import useMode from "./useMode";

describe("test usemode", () => {
  it("test mode change", () => {
    const { result } = renderHook(() => useMode());

    act(() => {
      result.current.toggleMode();
    });

    expect(result.current.mode).toBe("dark");
  });
});
