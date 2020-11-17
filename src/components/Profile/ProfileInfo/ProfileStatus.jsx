import React from 'react';

class ProfileStatus extends React.Component {
    statusInputRef = React.createRef();

    constructor(props) {
        super(props);
    }

    state = {
        editModified: false,
        status: this.props.status
    }

    render() {
        console.log('render');
        return (
            <div>
                {
                    this.state.editModified
                        ? <div>
                            <input autoFocus={true}
                                   onChange={this.onStatusChange}
                                   onBlur={this.deactivateEditMode}
                                   value={this.state.status}
                            />
                        </div>
                        : <div>
                            <span onDoubleClick={this.activateEditMode}>{this.props.status || "No status"}</span>
                        </div>
                }
            </div>
        )
    }

    activateEditMode = () => {
        this.setState({
            editModified: true
        })
    }

    deactivateEditMode = () => {
        this.setState({
            editModified: false
        })

    }

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        });
    }

    componentDidUpdate(prevProps, prevState) {
       if(prevProps.status !== this.props.status){
           this.setState({
               status: this.props.status
           });
       }
    }
}

export default ProfileStatus;