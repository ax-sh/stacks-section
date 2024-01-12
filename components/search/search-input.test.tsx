import { SearchInput } from "@/components/search/search-input";
import { render, screen } from "@testing-library/react";

describe(SearchInput.name, () => {
	it("should load search component", () => {
		render(<SearchInput term={"foo"} setTerm={vi.fn()} />);
		screen.logTestingPlaygroundURL();
	});
});
