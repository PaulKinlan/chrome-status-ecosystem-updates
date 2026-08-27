import fs from 'node:fs/promises';
import path from 'node:path';
import { config } from '../config.js';

export async function writeJsonReports(reportData) {
  const { weekString } = reportData;
  const weeklyDir = path.join(config.reportsDir, 'weekly');
  await fs.mkdir(weeklyDir, { recursive: true });

  const jsonStr = JSON.stringify(reportData, null, 2);

  // 1. Weekly snapshot JSON
  const weeklyPath = path.join(weeklyDir, `${weekString}.json`);
  await fs.writeFile(weeklyPath, jsonStr, 'utf-8');

  // 2. Latest pointer JSON
  const latestPath = path.join(config.reportsDir, 'latest.json');
  await fs.writeFile(latestPath, jsonStr, 'utf-8');

  return { weeklyPath, latestPath };
}
