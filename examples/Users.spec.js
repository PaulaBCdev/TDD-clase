import { Users } from "./Users.js";
import axios from "axios";
jest.mock("axios");

describe("Testing de la clase User", () => {
  // Testing con datos reales
  describe.skip("Utilizando api real", () => {
    let data;

    // Hooks
    beforeAll(async () => {
      // Se dispara una unica vez antes de TODOS LOS TESTS
      data = await Users.getAll();
    });

    beforeEach(() => {
      // Se dispara antes de CADA TEST
      /* console.log(data); */
    });

    afterAll(() => {
      data = undefined;
    });

    it("Debe devolver un array con 10 usuarios cuando llamamos a getAll", async () => {
      /* const data = await Users.getAll(); */
      expect(data).toBeArray();
      expect(data).toHaveLength(10);
    });

    it("Debe devolver un usuario con username 'Samantha' en la posicion 2", async () => {
      /* const data = await Users.getAll(); */
      expect(data[2]).toHaveProperty("username");
      expect(data[2]).toContainEntry(["username", "Samantha"]);
      expect(data[2].username).toMatch(/Samantha/);
    });
  });

  // Mock
  describe("Utilizando mocks", () => {
    let data;
    beforeAll(async () => {
      const mockUsers = Array.from({ length: 10 });
      mockUsers[2] = {
        username: "Samantha",
      };
      axios.get.mockResolvedValue({ data: mockUsers });
      data = await Users.getAll();
      console.log(data);
    });

    it("Debe devolver un array con 10 usuarios cuando llamamos a getAll", async () => {
      expect.assertions(2);
      /* const data = await Users.getAll(); */
      expect(data).toBeArray();
      expect(data).toHaveLength(10);
    });

    it("Debe devolver un usuario con username 'Samantha' en la posicion 2", async () => {
      /* const data = await Users.getAll(); */
      expect(data[2]).toHaveProperty("username");
      expect(data[2]).toContainEntry(["username", "Samantha"]);
      expect(data[2].username).toMatch(/Samantha/);
    });
  });
});
