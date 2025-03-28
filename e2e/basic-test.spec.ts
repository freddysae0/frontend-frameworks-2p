import { test, expect } from "@playwright/test";

test.describe("Shrek Adjective Changer - - - REACT TEST", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://127.0.0.1:4950");
  });

  test("Debe mostrar un adjetivo inicial", async ({ page }) => {
    const adjectiveSpan = await page.locator('[data-testid="adjective-span"]');
    await expect(adjectiveSpan).toBeVisible();
  });

  test("Debe cambiar el adjetivo al hacer clic en el botón", async ({
    page,
  }) => {
    const adjectiveSpan = page.locator('[data-testid="adjective-span"]');
    const firstAdjective = await adjectiveSpan.textContent();

    await page.click("button");

    await expect(adjectiveSpan).not.toHaveText(firstAdjective!);
  });

  test("Debe volver al primer adjetivo después de recorrer todos", async ({
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

test.describe("Shrek Adjective Changer - - - VUE TEST", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://127.0.0.1:4951");
  });

  test("Debe mostrar un adjetivo inicial", async ({ page }) => {
    const adjectiveSpan = await page.locator('[data-testid="adjective-span"]');
    await expect(adjectiveSpan).toBeVisible();
  });

  test("Debe cambiar el adjetivo al hacer clic en el botón", async ({
    page,
  }) => {
    const adjectiveSpan = page.locator('[data-testid="adjective-span"]');
    const firstAdjective = await adjectiveSpan.textContent();

    await page.click("button");

    await expect(adjectiveSpan).not.toHaveText(firstAdjective!);
  });

  test("Debe volver al primer adjetivo después de recorrer todos", async ({
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
