import React from 'react';
import debounce from 'lodash.debounce';

export default class DockerHub extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            dockerHubState: [],
            searchResponse: [],
            searchName: ""
        };

        this.onChangeDebounced = debounce(this.onChangeDebounced, 300)
    }

    handleInputChange = e => {
        this.setState({searchName: e.target.value})
        this.onChangeDebounced(e)
    }

    onChangeDebounced = () => {
        this.callApi(this.state);
    }

    callApi = async ({searchName}) => {
        const response = await fetch('/docker-hub', {
            method: 'POST',
            mode: 'same-origin',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({name: searchName})
        })
            .then(results => results.json())
            .then(results => {
                if (Array.isArray(results)) {
                    this.setState({searchResponse: results})
                } else {
                    this.setState({searchResponse: []})
                }
            });
    };

    render() {
        return (
            <div className={'DockerHub'}>
                <input name="searchName" placeholder="Search" value={this.state.searchName} onChange={this.handleInputChange} />
                <ul>
                    {this.state.searchResponse.map((item, index) => {
                        return <li>
                            {item.Name}<br />
                            {item.Description}<br />
                            official: {item.IsOfficial}<br />
                            automated: {item.IsAutomated}<br />
                            likes: {item.StarCount}<br />
                            <button type="button" value={item.name}>Download</button>
                        </li>
                    })}
                </ul>
            </div>
        );
    }
}