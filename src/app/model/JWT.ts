export class JWT {
    static Jwt(json: JWT): JWT {
    return new JWT(    
      json['jwt'],
      json['token']
    );
  }

  constructor(    
    public jwt: string,
    public token: string
  ) {}  
}