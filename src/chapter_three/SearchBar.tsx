/**
 * Created by Gene on 16/3/11.
 */

class SearchBar extends React.Component<SearchBarProps, any> {

    constructor(props:SearchBarProps) {
        super(props);
    }

    private handleChange() {
        this.props.onUserInput(
            this.refs['filterTextInput']['value'],
            this.refs['inStockOnlyInput']['checked']
        );
    }
    render() {

        return (
            <form>
                <input
                    type="text"
                    placeholder="Search..."
                    value={this.props.filterText}
                    ref="filterTextInput"
                    onChange={this.handleChange.bind(this)}
                />
                <p>
                    <input
                        type="checkbox"
                        checked={this.props.inStockOnly}
                        ref="inStockOnlyInput"
                        onChange={this.handleChange.bind(this)}
                    />
                    {' '}
                    Only show products in stock
                </p>
            </form>
        );
    }
}

export default SearchBar;