import React from 'react';

class ProfileStatus extends React.Component<any, any> {

    // statusInputRef = React.createRef()
    state = {
        editMode:false,
        status:this.props.status
    }

    activateEditMode() {
        debugger
         this.setState( {
            editMode:true,

        })
    }
    deactivateEditMode() {
        this.setState( {
            editMode:false,

        })
        // this.props.updateStatus(this.statusInputRef.current.value)
        this.props.updateStatus(this.state.status)
    }
    onStatusChange =(e:any) => {
        this.setState({
            status: e.currentTarget.value}
        )
    }
//     componentDidUpdate(prevProps, prevState) {
// if(prevProps.status !== this.props.status){
//     this.setState({
//         status:this.props.status
//     })
// }
//     }

    render() {
        // // Если у нас не profile то есть у нас нет его
        // if (!this.props.profile) {
        //     return <div><Prealoder/></div>
        // }

        return (<>
            <div>
                {!this.state.editMode &&
               <div>
                  <span onDoubleClick={this.activateEditMode}>{this.props.status || 'No Status'}</span>
               </div>}
                {this.state.editMode &&
            <div>
                <input onChange={this.onStatusChange}
                       autoFocus={true}
                       onBlur={this.deactivateEditMode.bind(this)}
                       value={this.state.status}/>
            </div>}
            </div>
        </>)
    }
}

export default ProfileStatus;