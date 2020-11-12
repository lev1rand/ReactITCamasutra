import React from "react"
import styles from './Users.module.css'
import userPhoto from '../../assets/images/user.png'

const Users = (props) => {
    let pagesCount = props.totalUsersCount / props.pageSize;
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return <div>
        <div>
            {pages.map(p => {
                return (
                    <span
                        className={props.currentPage === p && styles.selectedPage}
                        onClick={() => { props.onPageChanged(p) }}>
                        {p}
                    </span>
                );
            })}
        </div>
        {
            props.users.map(u => <div>
                <span>
                    <div key={u.id}>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.userPhoto}></img>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                props.unfollow(u.id)
                            }}>Follow</button>
                            : <button onClick={() => {
                                props.follow(u.id)
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


export default Users;