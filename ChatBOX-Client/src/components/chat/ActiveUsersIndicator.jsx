import { styled } from 'styled-components'

const ActiveUsersIndicator = ({ nbrConnectedUsers }) => {

    return (
        <ConnectedUsersLayout>

            <GreenCircle></GreenCircle>

            <ConnectedUsersMessage>
                {nbrConnectedUsers} {nbrConnectedUsers > 1 ? 'users' : 'user'} connected
            </ConnectedUsersMessage>

        </ConnectedUsersLayout>
    )


}

// Components

const GreenCircle = styled.div`
   width: .5rem;
   height: .5rem;

   background-color: #00bb00;
   border-radius: 100%;
 `

const ConnectedUsersMessage = styled.span`
   font-size: .7rem;
   font-weight: 300;
 `

// Layout
const ConnectedUsersLayout = styled.div`
   display: flex;
   align-items: center;
   gap: .3rem;
 `

export default ActiveUsersIndicator;