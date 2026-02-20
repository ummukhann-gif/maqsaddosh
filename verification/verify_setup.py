from playwright.sync_api import sync_playwright

def run(playwright):
    browser = playwright.chromium.launch()
    page = browser.new_page()
    try:
        page.goto("http://localhost:5173/")
        # Wait for the H1 to be visible
        page.wait_for_selector("h1", state="visible")
        # Check text content
        assert "Home" in page.content()
        page.screenshot(path="verification/home_page.png")
        print("Screenshot saved to verification/home_page.png")
    except Exception as e:
        print(f"Error: {e}")
    finally:
        browser.close()

with sync_playwright() as playwright:
    run(playwright)
