import mailgun, { Mailgun } from 'mailgun-js';


class MailGunService {
  private DOMAIN: string = process.env.REACT_APP_MAILGUN_DOMAIN!;
  private API_KEY: string = process.env.REACT_APP_MAILGUN_API_KEY!;
  private ME: string = process.env.REACT_APP_ADMIN_EMAIL!;
  private mg: Mailgun;

  constructor() {
    this.mg = mailgun({
      apiKey: this.API_KEY,
      domain: this.DOMAIN
    });
  }

  send(name: string, email: string, subject: string, text: string) {
    const data = {
      from: `${name} <${email}>`,
      to: this.ME,
      subject,
      text
    }

    this.mg.messages().send(data);
  }
}

export default new MailGunService();