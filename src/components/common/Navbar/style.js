const style = {
    flexBetween: {

        display: "flex",
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    flexCenter: {

        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
        gap:'6px'
    },
    icon:{
        fontSize:"29px",
        mr:'8px',
        color: 'white'
    },

    linkColor:{
        color: 'white'

    },

    flexStart: {
        display: "flex",
        listStyle: 'none',


        "& li": {
            padding: '10px 20px 0px 20px',
            cursor: 'pointer',
            transition: 'all 0.2s ease-in',
            color: 'white',

            "&:hover": {
                color: '#1434A4'
            }
        }
    }
}

export default style