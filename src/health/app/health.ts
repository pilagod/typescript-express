export default class HealthUseCase {

  public constructor(
    private message: string,
  ) {}

  public check(): string {
    return this.message;
  }
}
