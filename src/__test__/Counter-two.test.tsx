import { render, screen } from "@testing-library/react";
import CounterTwo from "@/components/counter-two/Counter-two";
import user from "@testing-library/user-event";

describe("Компонент Counter-two", () => {
  test("Отработка функции по клику", async () => {
    user.setup();
    const incrementHandler = jest.fn();
    const decrementHandler = jest.fn();

    render(
      <CounterTwo
        count={0}
        incrementCount={incrementHandler}
        decrementCount={decrementHandler}
      />
    );
    const incrementButton = screen.getByRole("button", {
      name: "Increment",
    });
    const decrementButton = screen.getByRole("button", {
      name: "Decrement",
    });

    await user.click(incrementButton);
    await user.click(decrementButton);

    expect(incrementHandler).toHaveBeenCalledTimes(1);
    expect(decrementHandler).toHaveBeenCalledTimes(1);
  });
});
