import { render, screen } from "@testing-library/react";
import { SearchInput } from "@/components/search/search-input";

describe(SearchInput.name, () => {
	it("should load search component", () => {
		render(<SearchInput term={"foo"} setTerm={vi.fn()} />);
		screen.logTestingPlaygroundURL();
	});
});
