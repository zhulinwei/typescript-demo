import "reflect-metadata";

function Autowired(id?: string) {
  return (target: any, propertyKey: string, descriptor: any) => {
    console.log({ target, propertyKey, descriptor })
    Reflect.defineMetadata("default", target, propertyKey);
  };
}

class TestService1 {
  log() {
    console.log('this is a log');
  }
}

class TestService2 {

  @Autowired() 
  testService: TestService1;

  log() {
    this.testService.log();
  }
}

export {};
