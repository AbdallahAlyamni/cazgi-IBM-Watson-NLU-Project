import React from 'react';
import './bootstrap.min.css';

class EmotionTable extends React.Component {
    state = { emotionList:[] }

    generateTable(){
        let emotionData = this.props.emotions;
        let emotionDataAsArray = Object.entries(emotionData);
        let emotionTable = emotionDataAsArray.map((emotion)=>{
        return <tr><td>{emotion[0]} </td><td>{emotion[1]} </td></tr>
        });
        return emotionTable;
    }

    componentDidMount() {
            this.setState({emotionList:this.generateTable()})
      }

    render() {
      //Returns the emotions as an HTML table
      return (  
        <div>
          <table className="table table-bordered">
            <tbody>
            {
              this.state.emotionList
            }
            </tbody>
          </table>
          </div>
          );
        }
    
}
export default EmotionTable;