import * as express from "express";
import { CommandBus } from "../../shared/command-bus";

// COMMAND_IMPORTS

export interface UsersRoutingProps {
  commandBus: CommandBus;
};

export const usersRouting = ({commandBus}: UsersRoutingProps) => {
  const router = express.Router();

  // COMMANDS_SETUP

  return router;
};
