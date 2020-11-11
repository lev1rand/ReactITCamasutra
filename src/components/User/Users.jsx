import React from "react"
import styles from './Users.module.css'
import * as axios from 'axios'
import userPhoto from '../../assets/images/user.png'

class Users extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let pagesCount = this.totalUsersCount / this.pageSize;

        let pages = [];
        for (let i = 0; i < pagesCount; i++) {
            pages.push(i);
        }
        return <div>
            <div>
                {pages.map(p => {
                    debugger;
                    return <span className={this.props.currentPage === p && styles.selected}>{p}</span>
                })}
                {/* <span>1</span>
                        <span>2</span>
                        <span className = {styles.selected}>3</span>
                        <span>4</span>
                        <span>5</span> */}
                {/* {pages} */}
            </div>
            {
                this.props.users.map(u => <div>
                    <span>
                        <div key={u.id}>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.userPhoto}></img>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => {
                                    this.props.unfollow(u.id)
                                }}>Follow</button>
                                : <button onClick={() => {
                                    this.props.follow(u.id)
                                }}>Unfollow</button>}

                        </div>
                    </span>
                    <span>
                        <span>
                            <div>
                                {u.name}
                            </div>
                            <div>
                                {u.status}
                            </div>
                        </span>
                        <span>
                            <div>{'u.location.country'}</div>
                            <div>{'u.location.city'}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    }

    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                this.props.setUsers(response.data.items);
            }
            );
    }
}

export default Users;