import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search-bar';
import VideoDetails from './components/video-details';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video-list';

const API_KEY = 'AIzaSyDHp23m1s7iHrZHiXE2YWXNUelIIk34VV0';


class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: undefined
        };

        YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });
        });
    }

    render() {
        return (
            <div>
                <SearchBar/>
                <VideoDetails video={this.state.selectedVideo}/>
                <VideoList
                    videos={this.state.videos}
                    onVideoSelect={selectedVideo => this.setState({selectedVideo})}/>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.querySelector('.container'));
