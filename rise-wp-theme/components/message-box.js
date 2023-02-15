class MessageBox extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
					<div class="message-box">
						<div class="message-box-list">
							<p class="message-box-date">Today</p>
							<div class="message-wrapper">
								<div class="contact-profile">
									<img alt="profile" src="./assets/images/contact-profile.png" />
								</div>
								<p class="message">
									Hello, Would you be available for a call today around 9:30pm
								</p>
							</div>
							<div class="message-wrapper message-rtl">
								<div class="contact-profile">
									<img alt="profile" src="./assets/images/contact-profile.png" />
								</div>
								<p class="message">
									Hello, Would you be available for a call today around 9:30pm
								</p>
							</div>
							<div class="message-wrapper">
								<div class="contact-profile">
									<img alt="profile" src="./assets/images/contact-profile.png" />
								</div>
								<p class="message">
									Hello, Would you be available for a call today around 9:30pm
								</p>
							</div>
							<div class="message-wrapper">
								<div class="contact-profile">
									<img alt="profile" src="./assets/images/contact-profile.png" />
								</div>
								<p class="message">
									Hello, Would you be available for a call today around 9:30pm
								</p>
							</div>
							<div class="message-wrapper message-rtl">
								<div class="contact-profile">
									<img alt="profile" src="./assets/images/contact-profile.png" />
								</div>
								<p class="message">
									Hello, Would you be available for a call today around 9:30pm
								</p>
							</div>
							<div class="message-wrapper">
								<div class="contact-profile">
									<img alt="profile" src="./assets/images/contact-profile.png" />
								</div>
								<p class="message">
									Hello, Would you be available for a call today around 9:30pm
								</p>
							</div>
							<div class="message-wrapper">
								<div class="contact-profile">
									<img alt="profile" src="./assets/images/contact-profile.png" />
								</div>
								<p class="message">
									Hello, Would you be available for a call today around 9:30pm
								</p>
							</div>
							<div class="message-wrapper">
								<div class="contact-profile">
									<img alt="profile" src="./assets/images/contact-profile.png" />
								</div>
								<p class="message">
									Hello, Would you be available for a call today around 9:30pm
								</p>
							</div>
						</div>
						<form class="message-box-input">
							<textarea placeholder="Enter to send. Shift + Enter to add a new line"
								name="message"></textarea>
							<div class="message-box-input_buttons">
								<button>
									<svg width="20" height="20" viewBox="0 0 20 20" fill="none"
										xmlns="http://www.w3.org/2000/svg">
										<path
											d="M10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10C19.9939 15.5203 15.5203 19.9939 10 20ZM10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18C14.4183 18 18 14.4183 18 10C17.995 5.58378 14.4162 2.00496 10 2ZM10 16C8.42002 16.0267 6.9266 15.28 6 14C5.55008 13.3983 5.21141 12.721 5 12H15C15 12 15 12 15 12.008C14.7853 12.7252 14.4469 13.3994 14 14C13.0733 15.2799 11.5799 16.0266 10 16ZM6.5 10C5.67157 10 5 9.32843 5 8.5C5 7.67157 5.67157 7 6.5 7C7.32843 7 8 7.67157 8 8.5C8 9.32843 7.32843 10 6.5 10ZM13.493 9.986C12.6684 9.986 12 9.31756 12 8.493C12 7.66844 12.6684 7 13.493 7C14.3176 7 14.986 7.66844 14.986 8.493C14.9849 9.3171 14.3171 9.9849 13.493 9.986Z"
											fill="#A9A9A9" />
									</svg>
								</button>
								<button type="submit">
									<svg width="34" height="34" viewBox="0 0 34 34" fill="none"
										xmlns="http://www.w3.org/2000/svg">
										<circle cx="17" cy="17" r="17" fill="#DB3B0F" />
										<path
											d="M19.8325 14.1746L14.109 19.9592L7.59944 15.8877C6.66675 15.3041 6.86077 13.8874 7.91572 13.5789L23.3712 9.05277C24.3373 8.76963 25.2326 9.67283 24.9456 10.642L20.3731 26.0868C20.0598 27.1432 18.6512 27.332 18.0732 26.3953L14.106 19.9602"
											stroke="white" stroke-width="1.5" stroke-linecap="round"
											stroke-linejoin="round" />
									</svg>
								</button>
							</div>
						</form>
					</div>
					`;
  }
}
window.customElements.define('message-box', MessageBox);
