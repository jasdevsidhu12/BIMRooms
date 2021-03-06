import React, {Component} from 'react';
import ReactDom from 'react-dom';
import classNames from 'classnames';

class RoomCard extends Component {

  generateID() {
    return '#' + this.props.id;
  }
  helloWorld(sim) {
    console.log('helloWorld click on card image');
    $(sim).openModal();
  }
  render() {
    const favoriteClasses = classNames('material-icons', (this.props.room.isFavorite
      ? 'orange-text text-darken-4 right'
      : 'grey-text text-lighten-2 right'));
    return (
      <div className="col m3">
        <div className="card hoverable modal-trigger" onClick={() => {this.helloWorld(this.generateID());}} href = {this.generateID()}>
         <div className="card-image">
           <img className="imgRow" src={this.props.cardImage} />
           <span className="card-title title-shadowing">
             <b>{this.props.room.overview}</b>
             <div className="text-shadowing">
               <h6>{this.props.room.type_of_house} in {this.props.room.region}</h6>
             </div>
           </span>
         </div>
         <div className="card-action blue-text text-darken-4">
          <b>{this.props.room.bimMer_details.name}</b>
          <div>
            @ {this.props.room.bimMer_details.team}
            <i className={favoriteClasses}>star</i>
          </div>
         </div>
       </div>
   {/* Below is the modal*/}
     <div id={this.props.id} className="modal modalCss">
           <div className="modal-content">
            <div className="row">
              <div className="col s6">
                 <img src={this.props.cardImage} className="imgModal"/>
              </div>
              <div className="col s6">
                  <h4>{this.props.room.overview}</h4>
                  <p><b>Overview: </b>{this.props.room.description}</p>
                  <p><b>Type: </b>{this.props.room.type_of_house}</p>
                  <p><b>Region: </b>{this.props.room.region}</p>
                  <p><b>Contact: </b>{this.props.room.bimMer_details.name} @ {this.props.room.bimMer_details.team}</p>
                  <br /><i className="material-icons green-text text-darken-4">done</i><b>Verified BIM User</b>
                  <br /><i className="material-icons green-text text-darken-4">done</i><b>Available Right Away</b>
                  <br /><i className="material-icons green-text text-darken-4">done</i><b>Near BIM</b>
                </div>
              </div>
          </div>
          <div className="modal-footer">
            <a href="#!" className="modal-action waves-effect btn-flat blue-text text-darken-4">
              Contact Person
              <i className="material-icons orange-text text-darken-4 right">email</i>
            </a>
            <a href="#!" className="modal-action waves-effect btn-flat blue-text text-darken-4">
              Add to Favorites
              <i className="material-icons orange-text text-darken-4 right">star</i>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export  default RoomCard;
