// import './index.css';

function Form() {
  return (
    <div class="container">
      <form
        action=" "
        method="post"
        id="contact_form"
      >
        <fieldset>
          <legend>Contact Us Today!</legend>

          <div class="form-group">
            <label>First Name</label>
            <div>
              <div>
                <input
                  name="first_name"
                  placeholder="First Name"
                  type="text"
                ></input>
              </div>
            </div>
          </div>

          <div class="form-group">
            <label>Last Name</label>
            <div>
              <div>
                <input
                  name="last_name"
                  placeholder="Last Name"
                  type="text"
                ></input>
              </div>
            </div>
          </div>

          <div class="form-group">
            <label>E-Mail</label>
            <div>
              <div>
                <span>
                  <i class="glyphicon glyphicon-envelope"></i>
                </span>
                <input
                  name="email"
                  placeholder="E-Mail Address"
                  type="text"
                ></input>
              </div>
            </div>
          </div>

          <div class="form-group">
            <label>Phone #</label>
            <div>
              <div>
                <input
                  name="phone"
                  placeholder="(845)555-1212"
                  type="text"
                ></input>
              </div>
            </div>
          </div>

          <div class="form-group">
            <label>Address</label>
            <div>
              <div>
                <span>
                  <i></i>
                </span>
                <input name="address" placeholder="Address" type="text"></input>
              </div>
            </div>
          </div>

          <div class="form-group">
            <label>City</label>
            <div>
              <div>
                <span>
                  <i></i>
                </span>
                <input name="city" placeholder="city" type="text"></input>
              </div>
            </div>
          </div>

          <div class="form-group">
            <label>State</label>
            <div >
              <div>
                <select name="state" >
                  <option value=" ">Please select your state</option>
                  <option>Alabama</option>
                  <option>Alaska</option>
                  <option>Arizona</option>
                  <option>Arkansas</option>
                  <option>California</option>
                  <option>Colorado</option>
                  <option>Connecticut</option>
                  <option>Delaware</option>
                  <option>District of Columbia</option>
                  <option> Florida</option>
                  <option>Georgia</option>
                  <option>Hawaii</option>
                  <option>daho</option>
                  <option>Illinois</option>
                  <option>Indiana</option>
                  <option>Iowa</option>
                  <option> Kansas</option>
                  <option>Kentucky</option>
                  <option>Louisiana</option>
                  <option>Maine</option>
                  <option>Maryland</option>
                  <option> Mass</option>
                  <option>Michigan</option>
                  <option>Minnesota</option>
                  <option>Mississippi</option>
                  <option>Missouri</option>
                  <option>Montana</option>
                  <option>Nebraska</option>
                  <option>Nevada</option>
                  <option>New Hampshire</option>
                  <option>New Jersey</option>
                  <option>New Mexico</option>
                  <option>New York</option>
                  <option>North Carolina</option>
                  <option>North Dakota</option>
                  <option>Ohio</option>
                  <option>Oklahoma</option>
                  <option>Oregon</option>
                  <option>Pennsylvania</option>
                  <option>Rhode Island</option>
                  <option>South Carolina</option>
                  <option>South Dakota</option>
                  <option>Tennessee</option>
                  <option>Texas</option>
                  <option> Uttah</option>
                  <option>Vermont</option>
                  <option>Virginia</option>
                  <option>Washington</option>
                  <option>West Virginia</option>
                  <option>Wisconsin</option>
                  <option>Wyoming</option>
                </select>
              </div>
            </div>
          </div>

          <div class="form-group">
            <label>Zip Code</label>
            <div>
              <div>
                <input name="zip" placeholder="Zip Code" type="text"></input>
              </div>
            </div>
          </div>

          <div class="form-group">
            <label></label>
            <div>
              <button type="submit">
                Send <span></span>
              </button>
            </div>
          </div>
        </fieldset>
      </form>
    </div>
  );
}

export default Form;
