import React from 'react'; 
import { Input, Label } from 'reactstrap';
import getData from '../../helpers/data/GetData';
import './category.scss';

class Category extends React.Component {
  state = {
    allServiceType: []
  }

  getAllServicesFromDb = () => {
    getData.getServicesType()
      .then((resp) => this.setState({allServiceType: resp}))
      .catch(err =>  console.error(err));
  }

  handleChanges = (e) => {
    const valueSelected = e.target.value;
    const selectedValueToInt = parseInt(valueSelected, 10);
    this.props.changeServiceType(selectedValueToInt);
  }

  componentDidMount() {
    this.getAllServicesFromDb();
  }

  render() {

    const { allServiceType } = this.state;

    const serviceType = () => {
      const servType = this.props.serviceType;
      if (!servType){
        return '0'
      } 
      return servType;
    };
    
    const displayOptions = allServiceType.map(service => <option key={service.id} value={service.id}>{service.serviceName}</option>);

    return (
      <React.Fragment>
        <Label for="typeCategory">Service Type</Label>
        <Input type="select" 
               name="typeCategory" 
               id="typeCategory" 
               value={serviceType()} 
               onChange={this.handleChanges} 
               required>
          <option defaultValue></option>
          {displayOptions}
        </Input>
      </React.Fragment>
    );
  }
}

export default Category;