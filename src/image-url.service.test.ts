import { ImageUrl } from "./image-url.service";
import { container } from "tsyringe";

const baseURL = "http://example.com/base";

describe("ImaegUrl", () => {
  let url: ImageUrl;

  beforeEach(() => {
    container.register("endpoint", { useValue: baseURL });
    container.register("bucketName", { useValue: "sample-bucket" });
    url = container.resolve(ImageUrl);
  });

  afterEach(() => {
    container.clearInstances();
  });

  describe("buildUrl()", () => {
    it("builds a valid image url", () => {
      expect(
        url.url("demo.jpeg", {
          resize: { width: 200, height: 200, fit: "cover" },
        })
      ).toBe(
        "http://example.com/base/eyJidWNrZXQiOiJzYW1wbGUtYnVja2V0Iiwia2V5IjoiZGVtby5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyMDAsImhlaWdodCI6MjAwLCJmaXQiOiJjb3ZlciJ9fX0="
      );
    });
  });
});
