

function Greetings ({name}){

    return(

        <div className="greetings">
            <h1>Bonjour <span className="greettings_name">{name}</span></h1>
            <p className="greetings_message">Félicitation ! Vous avez explosé vos objectifs hier 👏</p>

        </div>
    )

}

export default Greetings;