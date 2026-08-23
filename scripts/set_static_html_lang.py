from pathlib import Path


OUTPUT_DIR = Path("out")


def main() -> None:
    if not OUTPUT_DIR.is_dir():
        raise SystemExit(f"Build output directory not found: {OUTPUT_DIR}")

    updated = 0
    for html_file in OUTPUT_DIR.glob("de/**/index.html"):
        content = html_file.read_text(encoding="utf-8")
        localized = content.replace('<html lang="en"', '<html lang="de"', 1)
        if localized != content:
            html_file.write_text(localized, encoding="utf-8")
            updated += 1

    print(f"Updated lang=\"de\" in {updated} German static pages.")


if __name__ == "__main__":
    main()
