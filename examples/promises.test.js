import { failedRequest, successfullRequest } from "./promises.js";

// Callback style
describe("Callback style", () => {
  it("Debe devolver un codigo de estado 200 cuando llamamos a successfullRequest", (done) => {
    successfullRequest().then((response) => {
      expect(response.status).toBe(200);
      done();
    });
  }, 10000); // Podemos configurar un timeout personalizado. Por defecto 5000

  it("Debe devolver un codigo 403 cuando llamamos a failedRequest", (done) => {
    failedRequest().catch((error) => {
      expect(error.status).toEqual(403);
      done();
    });
  }, 10000);
});

// Resolve style
describe("Resolves / Rejects style", () => {
  it("Debe contener un codigo de estado 200 cuando llamamos a successfullRequest", () => {
    return expect(successfullRequest()).resolves.toContainEntry([
      "status",
      200,
    ]); // A partir de .resolves podemos evaluar el contenido completo de la respuesta
  });

  it("Debe contener un codigo de estado 403 cuando llamamos a failRequest", () => {
    return expect(failedRequest()).rejects.toContainEntry(["status", 403]);
  });
});

// Async / await style
describe("Async / await style", () => {
  it("Debe contener un codigo de estado 200 cuando llamamos a successfullRequest", async () => {
    expect.assertions(1);
    const response = await successfullRequest();
    expect(response.status).toEqual(200);
  });

  it.only("Debe contener un codigo de estado 403 cuando llamamos a failRequest", async () => {
    expect.assertions(1);
    try {
      await failedRequest();
    } catch (error) {
      expect(error).toContainEntry(["status", 403]);
    }
  });
});
