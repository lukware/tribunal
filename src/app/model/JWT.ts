export class JWT {
  
  static Jwt(json: JWT): JWT {
    return new JWT(
      json['jwt']
    );
  }

  constructor(
    public jwt: string
  ) {}  
}