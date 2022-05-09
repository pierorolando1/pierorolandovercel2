import { Button, Text } from '@geist-ui/core'
import type { NextPage } from 'next'

const Home: NextPage = () => {

    return (
        <>
            <Text h1>Start our Geist journey.</Text>
            <Text className='in-view' h1>Start our Geist journey.</Text>
            <div style={{
                height: '100vh',
            }}></div>
            <Button>Submit</Button>
        </>
    )
}

export default Home
