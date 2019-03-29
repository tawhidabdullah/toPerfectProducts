import React,{Component} from 'react'; 
import {connect} from 'react-redux'; 
import {subscribeUser} from '../../actions/subscribUser'; 

class Footer extends Component {
  state = {
    email: '',
    errors: {}
  }; 
  

  onEmailChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    })
  }; 




  onSubscriptionSubmit = (e) => {
    e.preventDefault(); 

    const email = this.state.email; 
    this.props.subscribeUser({email});


  }

  
  componentWillReceiveProps(nextProps){ // it's runs when our components recive new props 
  if(nextProps.errors){
   this.setState({ // set nextProps.errors to local state 
     errors: nextProps.errors
   }); 


   if(nextProps.errors){
     this.setState({
       email: ''
     })
   }
  }; 
 }



  render(){
    return (
      <div className='bg-dark text-white mt-5 p-4 text-center'>
          <div className='row'>
            <div  className='col-md-6'>
           <h2 className='display-4'>
              To PerfectProducts
           </h2>
              <p className='lead'>Designed & Developed by Code Supply Co.</p>
            </div>
            <div className='col-md-6 p-4 mt-3'>
              <div className='ml-3'>
              <form className='form-inline'  onSubmit={this.onSubscriptionSubmit} >
                <div className='form-group mb-2'>
                  <input type='email' name='email'
                   className='form-control' 
                    value="email@example.com"
                    onChange={this.onEmailChange} 
                    value={this.state.value}
                    />
                </div>
                <button  className="ml-3 btn btn-secondary mb-2"> Subscribe </button>
             </form>
              </div>
            </div>
          </div>
      </div>
      )
  }
}; 


const mapStateToProps = (state) => {
  return {
    errors : state.errors
  }
}

export default connect(mapStateToProps, {subscribeUser})(Footer); 