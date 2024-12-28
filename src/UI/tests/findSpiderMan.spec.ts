import { expect, test } from "@playwright/test";

test.describe("Spider", () => {
    // await page.goto("https://qaplayground.dev/");

    // await page.locator("a[href='/apps/dynamic-table/']").click();

    // await expect(page).toHaveURL(/\/apps\/dynamic-table\//);

    // const superheroes = page.locator("tbody tr");
    // const count = await superheroes.count();

    // let spiderManFound = false;

    // for (let i = 0; i < count; i++) {
    //   const row = superheroes.nth(i);
    //   const rowText = await row.innerText();

    //   if (rowText.includes("Spider-man")) {
    //     spiderManFound = true;

    //     await expect(row).toContainText("Spider-man");

    //     break;
    //   }
    // }

    // expect(spiderManFound).toBe(true);

    test("find Spider-man", async ({ page }) => {
        await page.goto("https://qaplayground.dev/");
        await page.locator("a[href='/apps/dynamic-table/']").click();
        await expect(page).toHaveURL(/\/apps\/dynamic-table\//);
    
        const spiderManRows = page.locator("tbody tr", { hasText: "Spider-man" });
        await expect(spiderManRows).toHaveCount(1); 
    
  });
});

