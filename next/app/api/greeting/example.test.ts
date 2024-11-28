import { testApiHandler } from "next-test-api-route-handler";
import * as appHandler from "./route";
import { expect, it } from "@jest/globals";

it("GET /api/greeting", async () => {
    await testApiHandler({
        appHandler: appHandler,
        test: async ({ fetch }) => {
            const response = await fetch({ method: "GET" });
            const body = await response.json();
            console.log(body);
            expect(response.status).toBe(200);
        }
    })
});