import { test, expect } from "@playwright/test";

const VUE_PORT = 4951;
const REACT_PORT = 4950;

const testingFn = (app: "Vue" | "React") => {
  const port = app === "Vue" ? VUE_PORT : REACT_PORT;
  test.describe(`Shrek Adjective Changer - - - ${app} TEST`, () => {
    test.beforeEach(async ({ page }) => {
      await page.goto(`http://127.0.0.1:${port}`);
    });

    test("Debe mostrar un adjetivo inicial", async ({ page }) => {
      const adjectiveSpan = await page.locator(
        '[data-testid="adjective-span"]'
      );
      await expect(adjectiveSpan).toBeVisible();
    });

    test("Adjetive must change on click at the button", async ({ page }) => {
      const adjectiveSpan = page.locator('[data-testid="adjective-span"]');
      const firstAdjective = await adjectiveSpan.textContent();

      await page.click("button");

      await expect(adjectiveSpan).not.toHaveText(firstAdjective!);
    });

    test("It must return to the first adjetive after pass throw everyone", async ({
      page,
    }) => {
      const adjectives = require("../react/src/app/shrek_adjetives.json");
      const button = page.locator('[data-testid="shrek-button"]');
      const adjectiveSpan = page.locator('[data-testid="adjective-span"]');

      for (let i = 0; i < adjectives.length; i++) {
        await button.click();
      }

      await expect(adjectiveSpan).toHaveText(adjectives[0]);
    });
  });
};
testingFn("React");
testingFn("Vue");
