import { Request, Response, NextFunction } from 'express';
import StatusCode from '../utils/StatusCode';
import TeamService from '../services/team.service';

export default class TeamController {
  private teamService: TeamService;

  constructor() {
    this.teamService = new TeamService();
  }

  public getAllTeams = async (_req: Request, res: Response) => {
    const result = await this.teamService.getAllTeams();
    return res.status(StatusCode.OK).json(result);
  };

  public getOneTeam = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const result = await this.teamService.getOneTeam(+id);
      return res.status(StatusCode.OK).json(result);
    } catch (error) {
      next(error);
    }
  };
}
