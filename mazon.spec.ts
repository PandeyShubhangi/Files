import { test, expect } from '@playwright/test';

test('shoping earphone', async({page})=>{
    await page.goto('https://www.amazon.in/');
    //searching earphone
    await page.getByRole('textbox').fill('Earphone');
    await page.locator('xpath=/html/body/div[1]/header/div/div[1]/div[2]/div/form/div[3]/div/span/input').click();
    //selecting earphone
    await page.goto('https://www.amazon.in/boAt-Bassheads-220-Wired-Earphones/dp/B0BRXY7FQB/ref=sr_1_1_sspa?crid=L8ZWIPEH6HLG&keywords=earphones&qid=1679482380&sprefix=ear%2Caps%2C175&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1');
    await page.locator('xpath=/html/body/div[2]/div[2]/div[5]/div[4]/div[1]/div[3]/div/div[1]/div/div/div/form/div/div/div/div/div[3]/div/div[34]/div/div/span/span/input').click();
    //screenshot
    await page.screenshot({ path: 'screenshot.png' });

});