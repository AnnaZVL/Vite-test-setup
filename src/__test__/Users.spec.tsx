import { render, screen } from "@testing-library/react";
import Users from "../components/users/Users";

describe("Компонент User", () => {
  test("Отрисовка заголовка", async () => {
    render(<Users />);
    expect(screen.getByRole("heading", { name: "Users" })).toBeInTheDocument();
  });

  test("Создание списка из 2 элементов", async () => {
    render(<Users />);
    const users = await screen.findAllByRole("listitem");
    expect(users).toHaveLength(2);
  });
});
