import type { Request, Response } from 'express';

const HealthCheck = async (req: Request, res: Response): Promise<void> => {
	res.send({status: 'Okay'});
};

const Echo = async (req: Request, res: Response): Promise<void> => {
	res.send({
		status: 'Okay',
		body: req.body,
		headers: req.headers
	});
};

export { Echo, HealthCheck };

