//test data for cpt_pod

import {PodMemberRole} from "../components/pod/pom-member-role.enum.ts";

//how to use:
// protected readonly podDetails: PodDetailsDto[] = POD_DETAILS_TEST_DATA;
export const POD_DETAILS_TESTDATA = [
  {
    uuid:'AURAPodUuid',
    podName: 'AURA',
    podShortName: 'AURA',
    podStyleClass: 'podStyleClass1',
    podDescription:'This pod is for AURA',
    podMembers: [//PodMemberDto
      {
        uuid: 'podMemberNiteshShriyanUuid1',
        podMemberRole: PodMemberRole.POD_LEAD,
        user: {//UserDto
          entityId: {uuid: 'NiteshShriyanUuid'},
          userKey: {gpin: '49053180'},
          name: 'Nitesh Shriyan'
        },
      },
      {
        uuid: 'podMemberAmarPandavUuid1',
        podMemberRole: PodMemberRole.SOLUTIONS_ARCHITECT,
        user: {//UserDto
          entityId: {uuid: 'AmarPandavUuid'},
          userKey: {gpin: '49008491'},
          name: 'Amar Pandav'
        }
      },
      {
        uuid: 'podMemberThomasDoblerUuid1',
        podMemberRole: PodMemberRole.JAVA_DEVELOPER,
        user: {//UserDto
          entityId: {uuid: 'ThomasDoblerUuid'},
          userKey: {gpin: '49041056'},
          name: 'Thomas Dobler'
        },
      }
    ],
    podWatchers: [//PodWatcherDto
      {
        uuid: 'podWatchHrishikeshRaghavanUuid1',
        user: { //UserDto
          entityId: {uuid: 'HrishikeshRaghavanUuid'},
          userKey: {gpin: '43333447'},
          name: 'Hrishikesh Raghavan',
          country: 'UK'
        }
      },
      {
        uuid: 'podWatchNickTuffsUuid2',
        user: {//UserDto
          entityId: {uuid: 'NickTuffsUuid'},
          userKey: {gpin: '43568763'},
          name: 'Nick Tuffs',
          country: 'UK'
        }
      }
    ]
  },
  {
    uuid:'GIMPodUuid',
    podName: 'Global Identity Management',
    podShortName: 'GIM',
    podStyleClass: 'podStyleClass2',
    podDescription:'This pod is for Global Identity Management',
    podMembers: [//PodMemberDto
      {
        uuid: 'podMemberTimUuid1',
        user: {//UserDto
          entityId: {uuid: 'TimUuid'},
          userKey: {gpin: '49013788'},
          name: 'Timothy Schilling'
        },
        podMemberRole: PodMemberRole.POD_LEAD
      },
      {
        uuid: 'podMemberKamilUuid1',
        user: {//UserDto
          entityId: {uuid: 'KamilLipinskiUuid'},
          userKey: {gpin: '49063666'},
          name: 'Kamil Lipinski'
        },
        podMemberRole: PodMemberRole.JAVA_DEVELOPER
      },
      {
        uuid: 'podMemberWiktorUuid1',
        user: {//UserDto
          entityId: {uuid: 'WiktorUuid'},
          userKey: {gpin: '49064232'},
          name: 'Wiktor Rosinski'
        },
        podMemberRole: PodMemberRole.JAVA_DEVELOPER
      }
    ],
    podWatchers: [//PodWatcherDto
      {
        uuid: 'podBartoszMarciniakUuid1',
        user: {//UserDto
          entityId: {uuid: 'podWatchBartoszMarciniakUuid'},
          userKey: {gpin: '49017821'},
          name: 'Bartosz Marciniak',
          country: 'Switzerland'
        }
      },
      {
        uuid: 'podWatchNickTuffsUuid2',
        user: {//UserDto
          entityId: {uuid: 'NickTuffsUuid'},
          userKey: {gpin: '43568763'},
          name: 'Nick Tuffs',
          country: 'UK'
        }
      }
    ]
  },
];
