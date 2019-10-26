import React from 'react';
import PropTypes from 'prop-types'
function LangaugesNav({ selected, onUpdateLangauge }) {
    const langauges = ['All', 'Javascript', 'Ruby', 'Java', 'CSS', 'Python']
    return (
        <ul className={'flex-center'}>
            {langauges.map((langauge) => (
                <li key={langauge}>
                    <button className='btn-clear nav-link'
                        style={langauge === selected ? { color: '#f00' } : null}
                        onClick={() => {
                            onUpdateLangauge(langauge)
                        }}
                    >
                        {langauge}
                    </button>
                </li>
            ))}
        </ul>
    )
}
LangaugesNav.propTypes = {
    selected: PropTypes.string.isRequired,
    onUpdateLangauge: PropTypes.func.isRequired
}
export default class Popular extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedLangauge: 'All'
        }
        this.updateLangauge = this.updateLangauge.bind(this)
    }
    updateLangauge(selectedLangauge) {
        this.setState({
            selectedLangauge
        })
    }
    render() {
        const { selectedLangauge } = this.state;
        return (
            <>
                <LangaugesNav selected={selectedLangauge} onUpdateLangauge={this.updateLangauge} />
            </>
        )
    }
}