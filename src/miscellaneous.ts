import * as winston from 'winston';
import * as groups from './groups';

async function createMiscellaneousGroup(): Promise<void> {
    const exists: boolean = await groups.exists('Miscellaneous') as boolean;
    if (exists) {
        winston.info('Miscellaneous group found, skipping creation!');
    } else {
        const config: {
            name: string;
            userTitle: string;
            description: string;
            hidden: number;
            private: number;
            disableJoinRequests: number;
        } = {
            name: 'Miscellaneous',
            userTitle: 'Miscellaneous',
            description: 'For Unmatched Posts',
            hidden: 0,
            private: 0,
            disableJoinRequests: 1,
        };
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call
        await groups.create(config);
    }
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    await groups.show('Miscellaneous');
}

export default createMiscellaneousGroup;
