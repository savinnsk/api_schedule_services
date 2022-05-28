import { Request, Response } from "express";
import { container } from "tsyringe";

import { DisableSchedulingUseCase } from "./DisableSchedulingUseCase";

class DisableSchedulingController {
  async handle(request: Request, response: Response) {
    container.resolve(DisableSchedulingUseCase);
  }
}

export { DisableSchedulingController };