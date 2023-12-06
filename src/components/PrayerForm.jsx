
export default function ContactForm(){
  return (
    <form name="prayerForm" method="post">
      <input type="hidden" name="form-name" value="prayerForm" />

    <div className="form-control">
    

                <label htmlFor="firstName">First Name: </label>
                <input type="text"
                id="firstName"
                name="firstName"
                />
                </div>
                <div className="form-control">

                <label htmlFor="lastName">Last Name: </label>
                <input type="text" 
                id="lastName"
                name="lastName"
                
                />
                </div>
                <div className="form-control">
                    <label className="textLabel" htmlFor="request">How can we pray for you?</label>
                    <textarea 
                    name="request" 
                    id="request" 
                    cols="30" 
                    rows="10"
                    >
                    </textarea>
                </div>
                <button>Submit</button>
            
            </form> 
            )
}




