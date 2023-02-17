import { darkTheme, lightTheme } from '../../themes/default';
import { AssetLogo } from './AssetLogo';
import { AssetLogoWithIcon } from './AssetLogoWithIcon';
import { Box } from '../Box/Box';
import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import { iconInvoke } from '../../icons/invoke';
import { storiesOf } from '@storybook/react';
import { Flex } from '../Flex/Flex';

const stories = storiesOf('AssetLogo', module);

const icon =
    // eslint-disable-next-line prettier/prettier
    // eslint-disable-next-line max-len
    'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiIHdpZHRoPSI1MHB4IiBoZWlnaHQ9IjUwcHgiIHZpZXdCb3g9IjAgMCA1MCA1MCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgNTAgNTAiIHhtbDpzcGFjZT0icHJlc2VydmUiPiAgPGltYWdlIGlkPSJpbWFnZTAiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgeD0iMCIgeT0iMCIKICAgIGhyZWY9ImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRElBQUFBeUVBSUFBQURCemNPbEFBQUFCR2RCVFVFQUFMR1BDL3hoQlFBQUFDQmpTRkpOCkFBQjZKZ0FBZ0lRQUFQb0FBQUNBNkFBQWRUQUFBT3BnQUFBNm1BQUFGM0NjdWxFOEFBQUFCbUpMUjBULy8vLy8vLzhKV1BmY0FBQUEKQ1hCSVdYTUFBQTd6QUFBTzh3RWNVNWs2QUFBQUIzUkpUVVVINGd3T0FUc2lXbWRPOEFBQUg5UkpSRUZVYU43Vm0yZDRGVWV5OS8vVgpjNDZPTXBKQVFpQ0VrY2dpNTJoeURnSk1NTW5rWUlLeGpZa21HUnN3Sm1QeWtqTVlrYk14SURJaWc1QXNBVUpDUWptSEUyZW02MzdBCjc2NzN1ZXgxWXAvZHQvckxQSE9tZS9yOHBycTd1cXFhbUptWjhkOHNHbFNvS0lJUlJ0ekVCUnpDZnR6RURVU2pEeDZqRzY2aUhyN0UKUjFnTUU5eGhBSVBCSUJEbzNYYUUva3RoU1RBWUtvcGdSZ3hTa0lSbDdJOWFVS2tZOXVFQWdENXZxZlVZMFloRUxZU2d4cjhEbWZoUApVL2xmd3IvMGkwQ0lRUlRTc1FXVmNRamJxUmdjYW9panRUNGtjODNyeXVsNEVQSmc5YjI3ejYrLy9ESHVXL2xjZmlsL2dDYzBGRU1VCm9oQUZDUW41YnJ2MjN3Ukxnd2J0RjJCRE1RZ3pZVU5qV0xYcGFwWldQU0g2MmJ5NC9DT25yM1E5OHNuc0liZjhWOTBjZXZuT29Ca2IKZDc2K0UzblFRaThkSXhHT01haUp2VGlQOHpqLzd4aUdodjgwSVFCdkJwMkVBUVlZOEJESGNSMEIySXRTdHRpaXI2emQ3d2I4dk9aQgo4V05EY2x0ZG5uMTJlbTVpZU1lRXdLVDkwWkhXd3F4OXFRTmI5aXJmc2RvbmRJU0VpR1lId0EvcEJZakMveDNkL0UvRDBxRkRod0lGCkNzWmlQTDZBQzlZajJlNXRXZU5JdVdaNXV1bld6Z09OYWRTVnpTZGZGSzQ5UHlEVEpUcjBYcnJoV3RGVXZSa2lIR2RRT2FESXRWaVoKZXNnemRvYUtJSHlIa3NpQ0Y3eitIWnIxbng2R0R0aGd4MTNFSWdhcGlNQWxMVmlMMEVzOFRZb3BqSHovbEl0TDRMM1h4ME56Nzl6OQpKdE1sb1Y2TXZ6S01qYnhOSDIzb1NmNG1RbS9YTlEzTHZOZS9YbGQ0aVowd1lpc0NzQjJoQ0VYb0w1L2huY3AvV3JOYzRBWlg3RUkwClZ1SUU3dU5oWHNPMEpWbmxyK3gwRkR3OGZ1S0MzanlxV3ZhRzlEM0oxY1E1dzFhbkxleE1UNHdCdkVNTHN4ZHJzTm9iOVlycWNnWFUKSG9RWnlJY1RxWEFoZHl5REYyYjhzaHErVTNrWG12V21XMittNXpmWGI3NnFEVGJZVUloQ0ZNSUNDeXh3d0FFSHJMREMrc3VUSXpBYwpJK0NPUmlpQjFUS0gwNTlucERaNjJlS1V3OTR5dGlEaDA0eWpHWnZGY2JuY0dDT04ya2hEQnh3MW1ha1Y2ZHFQaHRManZSb0dqTy9wCm5laTMxT2NZTjJVenQwVkoxSVEvVkRpZy9sTjVSK0QrbW1ieHI4cWI2VGtDRVlqQU9aekZXYVFpQTZsd2dnbE9NTU1NTTF6aEFqY0UKSWdCbFVBTTFVSk1uOGlRZVJ5MnBOSlcyblMwcWFmbmh4c3Y4UGMrY2IvZTNqMHRzVEx2VWRYb21WNVhueFNiRlMxbnZOazl2YTZtUgo4ZUdvU3VYYmpabmM0MG5UZTkwejVUVnhSS2FKQ0c1Q085QVVWblRBWEh5SGhXaURSbWlLVHVpTXp2L1UyNzh3bC8wNW81UUJNQWdBCmdmRUVqeEdEMXFpUHh2Z1pLbTdERDBEVnQ5VGJBUURjSGdDb0VvQXczbzl5WEExTFVaayt6bXYvT2pERGMyRHUzVXFyZzg5YjlUNVAKck1ZTXh4TDdDb2NsdjIzdUtwelBxL002dDJlWSs4aU85cTNldlNZdDJlL3pzRXh2djJ4ODhiL2UwaEdBbGIrRkdTSFVDR1dSamEzNApHbnN4QU1QUUJnUVhtR0NBK09PSzhrY3F2RUZLWUJEeW9TRUhSN0FRTnpBVnQ3a05zcUZTdnJ5akYvQnU4NUxDKytaWXU3KzFtTldiCnJ1cFcyVXZackt3UWMweDdqWXVkNnB2S09Fdm5DREs3TkRSTkpTajV4QWdGY0NWN3VlMUU0YUtveUZkM292dHlHQTNLdk9vQS9GSFYKUFZxc2MzbzBibVBaajhiNVQyN2VwTW1ZRFU2WnJ1MmM3Vm5mSnUxTW5WRlVXZDFzZHhNZmlXNGl6TFc1Y2F1enEyY050OXNlRDV6cQplZ3h6V1k2NVNqYmljUWJBWndoQkpLNmhQbXFnTkRSSWFIOFUyZS9UclA4MzVuVklGTUlBT3c2ak4xN2pHQTd6Ti9LdWJNbVZVMkplCkQwN2Y4SHBmV3RoTDl5eWpaVXZxaStRSmVyUHN2TGk3dGdONWJheWhrdkRLMEJDSFRIMUtyRGVjZGl0ZS9vYWJyLytURUhqTkQ3eGQKTHIva3BrQWx2MXB1ai95KzQyOWZIN0M2VlZFT08reStWVDFOUjhwODJxS3ZSMlNWQmNGbi9GeEtWWG9XcFU1NWRmdGU3OEt4THhHVApidlpObVpHMDM5d2lKMDdycm02eUpSU2J3eWNNcTBJT3VvaHloMXNsKzMxVWQzaW52R3BUMnB6MkgxbG1iOG5PTWw0RThDUHhIUjBYCnZiRVJWekQybnd5WGR3U0x3WkFBSkFRSVExRVN6WEFmNmJ6U2NjaDZXNTE4ZjhuVGE0K1dwZzZ4VG9qNUxNWFBwV2xPNlJPZkZMUkoKbVB6dzUveHVPYWFzQWRvOTIxZjRYcS9NRVlCeVg1OENjSjdzckZTUlljNlh5NmhLRmMrQklmMk5ZWDU5NmhtTnZVcDNLUThPOVpuaQp0bHQ4VEtsNlNaTmRYeHIvcGJFd0orbm1kc2ZjZUw4SG15d3hLYU5TU2hSK24vTUtzQVFWdmdic2lkWlNBUGV6ZkFob3JSdy9BSHhRCnBLT01YSzJjYmZKU2pLdjQwY3lUZFk1TThPazZvSEZRKzF3MGQ2MHV5b3YzRWF3OHdHeTh4TWNRMEtGRC9EYXkzNFlsQVdURGlteE0KeFRCOGdaSTRoRjdXa3BhSHRpcFgvZTk3M3BpbVQzWHhUT3oydUkvcFRrN3psVjNpN05HdE16dFkzN1B2QXBScDRncEEzd3FHQ1Q1WQpnSGh4WEt6QzkwamlwMWdzamtzRFlKeEdsd0dhcHg4QktJejhLVmpwN1dUMWFtZzRhaENHV3NwSy9pNS9tQnFxTlhTVXN0aTBhTUN4CnhkWWFIOWpETFQvVEprZU1MWjdhTzFiWkw1UFVmYTBweUxJTkwyaUdwK1oyZVpsYzEzcXNxSUZNY0RTeXJQYTh4ZjE5ZWkxNTFDem8KMng2anEzZGNON3c2bDNWN3J2UlV5bEtlZUk0a2xJVUZnWENEei84TjY3ZEdMRU5BNGlMVzRTN2kwQlBuOUdyYVBMMVR4S2hIeGdkRwpyWUduK2RYRjJPTEdvc0w2YytwRVA0dnVqV01pSGd2OVhqclg5Wml2REJHeHlpMnlvQVpPNGlBMDdORlgwa2wyNXhKUWVMVnNJWHg0CkVJMDN0RlFhS1RCOG9ReWpOa1NvYnBpaEZJakx5aUorTFU5ektiMmVYc2Z0TEtxWmx0dG5HZUxzYXd2YnlwT0d6eXd4b3BwQmxhY28Ka2xZaVVYdHFXeVZQbXU5bDMwYTVYRXRxZCtRWHBOdUNFYTY5d21ybHNlR2dJYnp3dHRPUGhSMG1MWWg0T01mZFlIRnY0WkUyY242Nwowd1A4dUozU0dWNlVoY3M0ajBCMFE4cy9DK3VOdG1VZ0RqRklSQ2xVd3hVMHhNM1lUNS8vTGJaeGJwRXlNN2FKM3QvTHlwOHU4SGc0CktycWEzd0xEZnFmRHBkb2FxaHVDWER2U0FmR3BvYkY0Wm5BeHRxTXEzSUtZZTdKZDh4TWF0V0JnQnRiRFI0eW5EVFJhZkUyZjhHcWwKRXB1VUhyU1d4aWt4dEZhNDBXTWtJVS9ycXR6aUUrbzl6VmZ2WjE5cHVNeXhtYzE0ckZJK3djMjYzUmFBYkh1dG92cjh3bm8yVjhGZQoyMnRyRHlTcG9YSVRqb2g2dEJGbWc0MnI4QVRlcjdXaXlpYVRSd1ZIdG5PZXNTaW52RzF1VGgyTXdCT013d3FZbWRFV0ZvcjRQWE9XCjRhMlkvbUhFcmNZYUhNTWlyRUwvZ3EvekRVVXJuODVLbXhNMXppdTg0cGRPaDcrNkZiUHY0UW43QkZ4ay82cWZLM2FYcWE0RGphMHAKMXFPeVlZeTQ1UlFpWEpWR0lrRHNwYzJpRklXZ003eXdBMVljd3kzK21tWWlFT1hvRVhtSktMa2VRMUdCdnNEbmlCYkVCbnFrRlNGVQoxclU5eEZDZGJINXdLSlBOaDZWRnpzaWNZUjJYZjFxdlhmaGpoZ01SMW8wRmMxR0JhemcrQlhnOER3VlFUb3dIa0NONkFmb1MyWVduCnVGNTJLbWFhN0ZMWGJmamN1QXFZMXZTejFGWUhSOTJVcDhROSthUG9qNWRpQXQ1RE96VDRQYkRlTm1lOVFSV1BCQ1RnR1I1aEZpS1EKaTMxUkc2S1BSeW5HdlM1Zlhobmx1NmgwY09iMlYwMEx2TU1uT0graGhCY2ZZRHlHVnM2OWxjT1U3MHowTlFXYWhIQ2x6VXFvNkNMOApEWlZsSnlWTVdVQW4rUWI4MEpjSDhTRmFSNjVVUkJvTm9FbWNRUDFrZjFxRys5S1hIa0hJcG5JQ2Y0OXU4aVo3V0Q3aDR4eVdOOUZjCjN0RWpkcktqa2NVL2JTZTJGSG5aVGVwbVMxMVpBYXJaNFBER2pzSlliYkxhcW1nTUF1elp0dGwwRmpOb0R5WEwzV1UrMUllbERTK0kKbkJzZTJxWGxrNW10M1Z0NmJYSHFqTHNvalJ6c1JSUmk0QVZ2ZVAxWnpYcGo0MTdETlZ6QlVBekJGT3ZQdGc2eWd5M1N1alFtc1ZMSApvRk8yUUtPcnN1dE9CKzl2dkoyeXR3QmNTeW5pZXhqdDVzNEg0S2N2eGhqdUkyZlNOdFEwV0NtT2FodXVBaUpTZE9WQ0pVL3h3MGhNCkp5QUpvRzcwQTBBU3dDVzVHNnNBL1NRQWNFOEFKY3piMEJkRkNmdXhVZytKN3dBb0kxT0RBT3gxcEdDQlBnY0E5SkdJQi9RTEFEN2cKSUlUSVN5S1I4aXh1VHR0b2tYczUzMUxTOWVsaXgvYnUvU29uMThIbnQ5Mi84OXBscU1JZE9WamVvMXlLRWE0QVBQRUhMUHUzd2JMRApEanNpRUlFSEdJakI2Sm0vS3k4d1A5TTUwWFFyL2JWeGtYT1h2QkhheEVKN0pQREVZRERVa3NPVmJjbzZmVHRlcXp1UXpZMjBRQ1dOCmZ0QXFZUm5YTnJhbGN0amhORi9VNWViaVBDVkpnOUtYR3RFVHNZOTEwUWJuK1NOK2h1RlVqNVpqTVEraXhYSU1Qc2JndE1iVVVqOFUKRjRqSFduUmFLOWpza3dwbjQ1NzVnZnlFbTFyVGNCOHJMWVB3VUM5dHE0d25hb0hOQVNzdnRMbGh1OFBEUG9HUEttbkdIRjc3YXA0KwozZTFHZnFqcHlTU2ZrS0xBbFo0Yk1SUWRPWWl5S1pMaVlZY3pIREFCY1ByOUc2QzN3U3BFRWF5b2pwSW9EaU1FZmlvU2hZWForenltCnVBN0xjVWVBL0NZNWswZFlpNUxJTUVlNTc3Nk93azJsSEZlVjNzcVA5c3B5T1Fxc0p1cUNycTdMTVlKK012VlcrbkdPY3pJOWxJTk4KQTdpSkdJWlVhcS8wcG5MVWx3c29EYzBSUU9zeERMM3RiZWlDMXYwRm9abjZ3YXZaQ0ZCN0YrNkN3emFHQTFET1Zna1RNTTFLWkVVRgoyMnUwMEkvWng4UE1ZMjA5NEM2NjJYZEQ2R0gyWldna09za280Mnpsc0xKVVBaTmJ5KzdScEdhWnA4SEhHc1dKdjVHSjc2SUMzR2t3CkNxQWlCOFhnQXUvZkEraTM1cXhZSkNFYTdrakhBN3lDRHdZL2ZSamxmVCt0eElEU3A0K3Y4WnZzUGZpT2pldmwzankvUWpncjR5a0oKNTBXaE1abjdta3E0VmVINnhnalhGN1FSY0x1RC9vRHpNMm9QbUFLeEYzQlN5QmN3M2djRE5BbDJBTE5RRXloYUNFK0g4Y1Z3d0diSwpmWXFqamowQVRCb0Q2T0lRQU9ESXB6SGMzWEVBTmkzTDRjNythcDZqTmNycDYyeUIxRUxmb2hhZ3RkcUVmK0pNbWFsZVVXNHJycVliCmV1TVh6OFRzR2RPcVRhay9kNkhOdzhXOU9OM0FjZXlrYi9FSnhxSTFGQ2p2Wm0rWUN3ZlNVUmtwQ09CbUtBTmRWakdqc0s3eFptVGwKdkVDcDVNOHU2S2lQUzd5akhFU0VVc0psdEI2R3IvVHQvTkJ3MExGWldVbE1tYmdpem1rSEtVRzB0WGhUZTRvdytIRkgxT2RQYUFDVwpLNzBwUStTSXIrUnBlOE9pTE5rZzkxN1dkSTZ3L2FnZlZkNlg3eGxVT1owdk0yU0dmaE9YdVk4Nmc5SzBUZklqZnFoNXFVMXhXNTJpCmxhTXhhazJITDg2cTFlMEx1WVNhNEZpSFlYS05mcEVMK1JvNjB6N2Vid2pGQ3JtNFQvTXlmVXhOM0JxS1c4akJRamticlJGQUdpUVUKNkZEd0p6d3ViNnZnRGp1TVlOekRHWFJBS0ZwTDNWRmJtMjk4RmY5ZHdScVJucEpyajlHYnZLeHNQTUtYUkFuRFUzMjdQdHZnZzMxVQpuWHZ4ZFY2b2U0dWExRk1hcUpZb2FaOU1zWnhNQllpai9qUUUyM21wL3JIOWpHV04vZHVpMGVsbGJSVm9zYlpaRkRpcGRFV2tDV2Q5CmhHeUZrZklGZjZ4NzhFVnVib3RqWjVxbmZzd2JvYXRtUFIwMzdkZmtJV3FqT2RrN29ZTGNidzNEVWZWSHJRYnZsaGRrV1p6bDdxVEwKQm5vdnNRSEJTb2t1YTAyKzlCR2x3UTh2T1p1MndKOWVvakVBRlMwQkdQOG9xcmM3L3hoVzZBRHF3QlUyTUVCalpXMXV6Y3RFSzMyeApQT1dVakswYzV5SEp4bTZ1bnJoQVpWek95S05rY0trS0YrUzYzYUhhR09tYXdhM29zY3ZIc2p5V08wTzlJYWNaN3hjZHpNK3h2Q3o0CkltTnFabW1ibjBOU1paUVJBNVNOMHE0M3BKcnltUzFGeE10OUZuOFJ6c0p5V3J6QUFKc3EvRG5MV2tyMDROM21RVW9oQWkwMnNVaW0KV3A0WnBzaHI1dmRNRmVWK3l6WlRHelpZNzdvV2NYZDdOYmZHQ0ZkSEN4TXMxczQ1WGROdTZrazhIQjFRaGo3R1V5UWlGbmFJUCsvdwpGRys5NTRMaUlCVGdEQmFCQUxGWG1hMkU4d2JOS21zclU2V0NjTFRScTZNcXpkWkhJSWd5dVRkVU1WbFc0RjZVTEUvSlRtS1dQbzkzCjAyTDFBUjhUL2JRaDJxMGlMYXVxNDNMdStkUmVIS3RzY1h4RGxaMUdxT1V3UW4vZ0dJcmFqamhyUmY1YVBXK0pRclFhYkluREdOdjgKb3FZSU5wOHZyQVdZeXhWRllxMGx5SkxGR3l3VkxRNDhzaFN6YnFGZTV2bHFhWXd4YjFlYllvWDVoc01OUnZObDdSSHR0bi9vY0lGcgpZZGJ6Y3ovZnRueG5yMnB2Z2NNNGoyWklnNHJZWHp5bjd3eVdCNXpoaGtzd29Ea1JBSjArY3V2dkU2dVdwYVhrUjJOTmxaUXBPR3RZCndZZHcwbGhLSGhNakRHWGxUdHBsdUNqenhYRnhncnNvOVF4bGVEbWljTkloOGh2bGIzQWs1QTdNV1VpOW5TZWdGeDY3VGFUcW5FQjMKeUIxbjBBZzc4WnB5ZEYrOHdrVzlMemJwbm5vR2F0ckR0WW9JdHNScUJpcGgzYU9WaGJRZDBlSXcxVDVYUHNhUGRoL2VoVVQ3YkY2SAowWTVzSGtSYkhEL0lFMURWejNXalhBQm40ejVZZE4vSGUyODQwcSsvOW56VkQ0UGhROW1jd1M1c2dSRUNOcWhRZjRsUi9rVllybkNICkt4NGlCZDRJQUVNM1JSY2I3SDNldkQvdnNhdWI5TStCbXhHbE1qZDR2TkF2Wkk1MXJxWUZaVjF6UHEwRlpRd3pIZE1xcG84M0xuRk0KVG84UlRsa2ZQcy9VMmlUM2piekROOUFoZVJoOURjK1UxMlMySEUyMDB6bkwrZml4NUc4K0UzK0o1aFJkU3h4QVUvT3JKSStpNzdNLwpTS2xKWGxtWFVwdlMwb0wwdFBhNGxiODZiUmc5ek91VXRwcnU1Y3YweStoVU5DbXpGbDhzOHNuTW9OM1dOVG50K2FyOVlzNWRGTm5tClpGMURvblZmd1ZHbG1MTGppZXNycDNqSDhhQmpsNndIc0JLZmtzSWJlU2sreEZkWURnVU05WTlHcmQ5bU9talFvV01ZUGtRZjdFQVkKanFZNjVVYmxwK2J0K051K2IxdFZ5WHcxOGNFRTI4NkU5Yy9HNlhYbE91a25ENnI3dFgxeU13YkpsbFJBTTNoUi9wV2NIb1VyMG5xawpUTGVQTUhxb2RrNXhuNlUyNS8xY1NYV0dsYzNxVUdSeUUrNU1vZW9BZVFmMTdOc0FYcVYrRDhEVldnWkFiTkU0Z0xZNVBnU3cwK0VLCjhHcHRCVURaaUFmUUNpY0F2S2RYQWZBVTRRQitVS29DZEozekFSNmx0TWRudE1aOVBWWnhGOHV6Z005TFBhclM2dVNpVTkzcTJ1czQKMTVrRzhBN3VneFowazJyaktKWmhISHpnRGg4UXhKK3g0QTBRRUtpT2htZ0dBMUp3eXYyK1I0YUhSMXF2VW1GbGZiU0dyMTgvMksxRQp1VzEyR2l0M1d4NWFvbmdJNzZJR3lnUXhYYlFzaWlyeU1Wc3pmTEp2V0szR0VXUkdlZGZoU2xNMDRrWmFPd3JIUjlRZDUxRFRrTUtuCjBRTVZlTDlzcTYrRUdiNWFHYkFXanp3OGNqeWhRVmdyai9LM3ZKSmJRa1dlcklqbkdFSFpjREE0RWpVQXJvbGNsRVZYdk1CRGJJUkUKaUY0Yk9ydlJBemloSGo1QkVoZFhGd3FMT094VlBOazFKU1grODAvdlR6emlkSFZYNk80VElaK1ZteEFjSmg3d2Zia0pPbm1LNGlBQQpHaVFBQlFMNDE4amVCa3VIaE1RSENFVjMzTWRFTHUvK2crR0lNTkRrY29hcWQ4eVA3clU3bmU1NTEvV29aeWR0WWVIR29sVHhRalEzCnhxc1I5aFBtYWNtK3FYc0twdEU2N1VmaDVyb1VRZHlaMDdWdFhJVU5mSUFQd1oxbjAxcTJjeWpHY0QwRW9wcXNRSW5VVCt0bXFJMzMKTkRkOUZYTFYycHpQUXZYQkVZeFJCWjZnTE45R0pMN2t4OUNSeFRwMHBHRVFnQXFvQ1FGQ0paamdobUE0VTFsTVF4SFA0WU53aFlkYwpKRFBsQWIyQ21LWk1kYys3dHVTbTcvT3h3NllPMmw5UVpZSC9NcVhLdFhycGpZWjZTV2QzYkJkZXRGdWNRWFYwZ0Rza1hPRDByMWJNCnR3OUREUnJNc01EQ3pueUZNOGxFdGVsWTNQYmt5MmtEWmVyNll0TWlLbjZZVEk4M21kdGtCNllYaWxnMVFEdVFOQ2R4VVhidm9zZUYKNjNESGF3Tk9BbHlncmdWRWtXMHlnRzE2WFlDSDZBc0FqcFluQVRtWlJ3S09UbmdCMkdKeEdMQWVrUUlvN0NDckE3YWI4Z2lnQVQ2QQo2Z0lBU0lBdlFIT1FDL0JJTUNBN3dBQlFTZGdCcUFCQVl3QUFzMkFFRENXaEFrNm5BY0IxdkhoSjQxeVc4V3plWUtrZWROd3p5Tk5yCjdPNEozMVdKSFBmbGw0cDNDNDhXN3VOd0NjUHhQZHFoS2pyQ0RjWGU1b2Y0MTE2SFl2Q0VKeldtdVRRSVIzQVcrYjVsL1Q0c1BpU20KZDZYalRkYXBldm93ODdjODN1Tk9pY0NZOTUrTFo4TlNGenNPK3Izdi9LVlRiYm1pc0xKYVZkYlNMOUU5enFJRVpab3NoV0ZjSlBmUgpJNzdLTC9nRFVZSm5hSjI1SDd2cUZma0JEYkYvd010SXR6MFNtZnpFNHN0YmVKQXRXUzhIdS82eEhzRW5aQ3FmNWM3eUN1WnpHVzVFCkRYa2VCaU1GUnU3S0t6Qkk2R0tJT01ObWZFZEVWVGhmbnBTZmNXV2VUNVVRd284TjZ4RW1xNW0rNTFDYWFNcDNQZUVTNFQ4MGI1czIKM3pFaU11akpLdnR1L2JJTXhSMEVZUThlWWlYT29pMnEvejNPK0x0Z3ZZbDJ2QWxUM01aTm5FUVl0bU91Wngvall1Tmc1K1lOTzdVcQpuNVlWMDB3K2xic1RTaVlldUppVVYweGZMVllZTXVrS1ZlQmRjaG9mNWpRNVRGYVNWdTJvdnRWUXk3R2FIVHhVSDBXMTZhbzJCeWwwCkRiTXhIc2R3UWo4aXY1T2pIZnVvQVMvV3R2QkpMdTRZTE4rblR0cGcwVW1PNVdUbGdyWkt6cExQdWEwOEtTL3BsL1ZjcnFyOWpJRlUKRHl0b0ZLM0NLaG9rSWd5ZDVYYUtWMnhVVWU1Ulg4cG8vWlZXWEUvaWUycWdPSXdmVkU4bmxjcTRkWE9hd0dOY3d2T3RucHBmUkVoMgpGL2NSVFlxWExPYnNQaEIzMll4T2FFOU5zQWJPY0liYkg0SDFELzBTeUlPQUdWNHdvQzZPb2pVS2c3cFZ2QlRjNmNubUN0NFJTV3IxCjY5NHZuamt0TndrNkxPeHFvTFRRVjdLS1hNWU40TVR6dEo5Z2x4ZXBEaGJ6SFBRaVoxNkRrYnlBQnlPTkY4ajNNQXRwNHFyU0hnTGoKeEJJZXIxWlNQWkZCUDVHM3FDZ09DMEhkMlYydm9wK205M2tIYmRCUHkyRWtPRWw1anJIS0Yxd2VadTVHZllTTlBzVTlQT0g1dU01ZAp0WG44a3B4NXQ5WVh3WEk3RzdraXBSaSt4by9HQVJTQ0IvS0cyMFdPNVJFZWxTcDlVVllHWFcrNnRNNG00MDhFVVlKeitBTFBJaC8wCm84Wnd3UEZtU0w4dDB2TmJwcjh6ZEFpMHdCaDA1MlJPNXl5UEdZWVhwbzQrSzV2M2Fxb2s5ZkhjNVhxNDlDRm56WDJNWnFOZzVYTzUKbUdLVWlySklqQkNMWkZNUklhYnpZaktMclp4QlFjb3Vma0JKNHJiY1JLZm9TNTVHbFdneWw2V0RWQ1I5MFYveDFOYWp2d2hUeS9KWQptTFVnK1pEL3BpM2hGTXpRVjBDaFhKbE9YYW1wUEkxU09DTlR1QnNDTkUwKzRnQXRRZTdtMlZwYm1TNFQxVUI1Z0JzNHRuTW5HcUZOClIwZEswNWVpdVZqSkhaVlNTazMzUnU3UjdtMUtyTzE5cjMySndKdGxQeXQzRHJFTXZFZXo2UzdkL0VWQjNpUWgvQ3Y5K1YxQlZoVU0KaWRQWWcwUHd3SHJjZFZ6bjYzeit3dTV0WCt3dGFmZGFrN1ZyaU4xWmE2ek5LMnhvNzIzOWh0WnFjZm9kdlo5anBycEJYYTJWVU0zVQpSWFhUajZHajdxUE80NDNzTGpmS1M3d01icktyRmlWcnFXMjRGYm5icDNGTGJZUGRoYUZmMWx2aUFVZnlJRzdGaS9TS09NRGhzcEs4CnhTdTRBdGZqOXZJc1crVndHUVJnREMvRCs2Z24wNmdlNm5BM1hzVjl1Q2FBVlJRQ2NMelRUZ29RRzN5bUdIczZtMHZwbldxMGE5bnAKMDAwRHZ4c1crTG4vVWY5WllQeU1reWlEbVJpSzB2RDhMUS9YNzRNbG9VR0hDZ1VTVGVHTFlIVG5pNWljV2luN2J0cDdSK1pPaTE1NgpMWG55blZHSlV2MGF1eDNOTkdtN28wSHJybnJwUXVacVZ6V2duT3FqaC9QM2FuVTFRbDdROC9YK3NydGVWU3JTb1ZmVmsvVUs4cFVHCnJUNU9jRTg5aXM5SkY4ZHdXaThIeURuOHVWNVBmb0tHM0lNbFg4TnNFQ0xsUUQ0SmxkdkkwVFFKdGNGOEQ4dlJEWDQ4bVU2SitzcGwKSGtzL2lkSmlLRVZ3TzZmMlR0TmQ1d1dlOEV2d0svdkI1MnNXZjdHbDZkYk8vVHBNRkMzNEI2NUI5YWdYTWFyQ0cyVmdnZ2xPN3dZVwpneUhBQUxiaUFQYnhVWGJtQVhRS0Izbll4VGEzdTl5djAydmd2Tk8zbHhXT0xuak9lWUE5MWg0RzJIZndRa0R0b25VQ3RJWjZBYUNsCjZDcWd1dWpOQWRrU0RvQmY4V3BBSDZUL0JIQ2NMQTRnMlBZUTRQbDZlWUExN1RyQWVmd1NvRnAwQThCWDJuQ0FJaWdVRVB1b05VQUsKendERUlsb0lLTnVVYTREaFBuWW9TWVlkb293ZTZGYTNlTGxKejRjR1YvbDR5YmVUeG5VYjZIVGR0Tmx6SnpXamNTakNKaXpDT1NndwpRb0g0YlgvRW4wM3Rmb0J3bk9CTE9JMzZORVdyWTIyeWJzYmV4eGVjSmlZdjZSalZ6ZEJkSlVUelp2bTVXbElPY2x6VlQ2T09HcXY1CjBtUkhOaWNqUWZhVURkRktqdGVXMGdTWktyTkZiK1dVT01KN0ZCWjNaVGp2MW9yamZieXYzeElnRDhjYU9pTDY2U0VjVGFPbGs5eEcKZzhVSDdFc216SVJkTEtVelNGSnl4QVVzTXJpTGxlSW0zY0ZvcFlxeEszazd6amtuZW8vcWRMSDVVTC84ZlUvbk52bkE1UFdWMy8yQQpUMmtLVGNZV0VLcWpGR1ppUENiOXNrUDhIYkQrZUg3V0cvdStFaHFoSTkzQlNVeVJydzBmdWJ3YTg3THZsSllEVXIvS0NyVjl1TERhCjMyWStId2hvWXcyamxKbjhXRjNGQy9CSXBtSWs5Y2RIdEp6eWVBdC9aZnJSK2FsZTFtbTRxWjBPNFdhOGhlWW1WM0VFY0YwR2IzUlMKV04wdXo5a1hhZkdBZWw4TkJEaGJ2WVNaSWtCM1VTYkJWMTVsSTVXVWxhZ25YY1lLcWtvTzhhbWM1VnpCTU40eDJxbGVzVjB0TStvTwpMMmJZNFBmRm12Yjd2Ym5rczRDZCtCc2FZd1g2SUF3VFVRbGwvcDRVOVRzdy9UWE5laU14U01RckhNSjhET090Y01KbFJ5WHoyTHdCCjZ6Y2RLQmJ1dHlCaDI0VVlrZE1tTFpSbkFuSzVUQVNvcm9nRWxBZkdKNERySHVQdEVydDlyL0tXWmoxQ1NuazJhRjRZY3J5NGZNOHYKOEFmUG41U0cxSU9OR1FGNTVlek9qM2E4VE1zZWVqdjQ1ODJGajZKbXBYbFlFclRwOXBmcUkwQ0wxN2NBU3JDc0JSaWVtMVQ2d2JXawowWDFRYnNQMVhqTVhYaHY2emZ0ZmwwMEpEZ3Vld05VNFRZeWhHZVNLT1NpTkVEU0FDZzBhalAvWDJ2ZXVZZjFhdnNRSGFDby80Y2E0CnlkOXFHZGFhZHhjOWJoYjU0TUQwQ3lOZW5vc3d4VW5yV0h1K1dsUGZXcTVOaVptbUpzMHpxb1lYZTlaR2FaQVdHRitwZWZtbGdlR3UKZGQxTHVpOERBR2ZYZnpUTEMyV1c3YWE1ZXNidzdMWFpxKzQzZkhZaHVkbk56SmhPV1Q5RlAwMXBsbnNrYjVaOXR1Z2JOTFBZUGZGOQp0OWQxbEZJK25hbzFyMUg3Z3N0aXp6eWZNWmpGTmZndzdhRmpWQllsVUI0TklIOXZ6c3hiaFArSzZDeFovNlU4NCtjY3gxdDRCeStUCjhUTHVIdzlwTnl5cmNvT3phcVhNem55U0h2aTZqbU9YeFMzM1kyYitTUlcvYmt3dTRjN01jZ3lYNUFqNWlFdHdvRHpEQXpoQ3p1QmwKLy9UV0RjemFWN1ppZGtOaHU1d3hSV0U1V3pQYXltbTIrNFdwek16U1M0N2dhc3c4Z3p2d1VEWXpjeFl6UzJhV0xGbitsYi83cnMvdQpxTERCZ1k2WWlJRmNpbHZoR0U2aU5UUXFvSUMvUDlNWkFOakdTUUF1VWx1MG9mWm9DeTlNUkROMFFIV1VSMVdrd3hraFNFY2luaUVSCjBZaGlGMjdHVFZHQ3B0Sk5oS0VIeGxBVXZnUVFDUUI4RWs4QmJzR0xZS1E0ek9MYjlKcnlpZEVWOVZFRERBVUdHUDZVTnYxSzNqV3MKWDRmQ0xUQWpId2R3QVB2d0V5THdGTEY0amdUVVJEQjhFWXF1NklLR2FJem1LSTJTS0lrM1V5My9zdEhpWDN5WTlQZjhQQU1NZUlvbgppTVIxWE1WbHBDRWJlWWhGSEJKUkV5RUlSbHUwUlJ2VVFXM1VoeEZHR1A2ZTJ2bE81Tjl6S3V5TmsrZlhTWWh2cnQ5QWZMT2xlTE5nCnYvbjE5d1RRMzdUNTY1WHIxMjMrN3hXTmZsWGVrZnkzSHFIN3I1VC85SEdVLzYva2Z3QktKaEhUNHV0QktBQUFBQk4wUlZoMFFYVjAKYUc5eUFGQkVSaUJVYjI5c2N5QkJSeHZQZHpBQUFBQWxkRVZZZEdSaGRHVTZZM0psWVhSbEFESXdNVGd0TVRJdE1UUlVNRGc2TlRrNgpNelF0TURjNk1EQm5jVzhOQUFBQUpYUkZXSFJrWVhSbE9tMXZaR2xtZVFBeU1ERTRMVEV5TFRFMFZEQTRPalU1T2pNMExUQTNPakF3CkZpelhzUUFBQUNSMFJWaDBSR1Z6WTNKcGNIUnBiMjRBYUhSMGNEb3ZMM2QzZHk1d1pHWXRkRzl2YkhNdVkyOXRYeEptc2dBQUFCRjAKUlZoMFZHbDBiR1VBVUVSR0lFTnlaV0YwYjNKQlhyd29BQUFBQUVsRlRrU3VRbUNDIiAvPgo8L3N2Zz4K';

stories.add('simple DT', () => (
    <ThemeProvider theme={darkTheme}>
        <Flex backgroundColor="bg" height="100vh" p={12}>
            <Box mr="10px">
                <AssetLogo
                    assetId="ETk6gjBhbEN3AxrzFVMK6tpYXRHeQz5rcJ877y9Jy81y"
                    name="AssetGate"
                    variant="large"
                />
            </Box>

            <Box mr="10px">
                <AssetLogo
                    assetId="2CjLFYkp4W4sEAxCjFG9oD3smfhvV6yQnNmiJyexbLdu"
                    logo={icon}
                    name="Apple Coin"
                    variant="large"
                />
            </Box>
            <Box mr="10px">
                <AssetLogo
                    assetId="2CjLFYkp4W4sEAxCjFG9oD3smfhvV6yQnNmiJyexbLdu"
                    logo={icon}
                    name="Apple Coin"
                    variant="large"
                />
            </Box>
            <Box mr="10px">
                <AssetLogo
                    assetId="ETk6gjBhbEN3AxrzFVMK6tpYXRHeQz5rcJ877y9Jy81y"
                    name="AssetGate"
                    size="30px"
                />
            </Box>
            <Box mr="10px">
                <AssetLogo assetId={null} name="Waves" variant="large" />
            </Box>
            <Box mr="10px">
                <AssetLogo
                    assetId="ETk6gjBhbEN3AxrzFVMK6tpYXRHeQz5rcJ877y9Jy81y"
                    name='"'
                    size="30px"
                />
            </Box>
            <Box>
                <AssetLogoWithIcon
                    assetId="2CjLFYkp4W4sEAxCjFG9oD3smfhvV6yQnNmiJyexbLdu"
                    name="Apple Coin"
                    size={24}
                    borderRadius="50%"
                    icon={iconInvoke}
                    iconLabel="Smart asset"
                    iconVisible={true}
                    popperOptions={{}}
                    width={30}
                />
            </Box>
        </Flex>
    </ThemeProvider>
));

stories.add('simple LT', () => (
    <ThemeProvider theme={lightTheme}>
        <Flex backgroundColor="bg" height="100vh" p={12}>
            <Box mr="10px">
                <AssetLogo
                    assetId="ETk6gjBhbEN3AxrzFVMK6tpYXRHeQz5rcJ877y9Jy81y"
                    name="AssetGate"
                    variant="large"
                />
            </Box>

            <Box mr="10px">
                <AssetLogo
                    assetId="2CjLFYkp4W4sEAxCjFG9oD3smfhvV6yQnNmiJyexbLdu"
                    logo={icon}
                    name="Apple Coin"
                    variant="large"
                />
            </Box>
            <Box mr="10px">
                <AssetLogo
                    assetId="2CjLFYkp4W4sEAxCjFG9oD3smfhvV6yQnNmiJyexbLdu"
                    logo={icon}
                    name="Apple Coin"
                    variant="large"
                />
            </Box>
            <Box mr="10px">
                <AssetLogo
                    assetId="ETk6gjBhbEN3AxrzFVMK6tpYXRHeQz5rcJ877y9Jy81y"
                    name="AssetGate"
                    size="30px"
                />
            </Box>
            <Box mr="10px">
                <AssetLogo assetId={null} name="Waves" variant="large" />
            </Box>
            <Box mr="10px">
                <AssetLogo
                    assetId="ETk6gjBhbEN3AxrzFVMK6tpYXRHeQz5rcJ877y9Jy81y"
                    name='"'
                    size="30px"
                />
            </Box>
            <Box>
                <AssetLogoWithIcon
                    assetId="2CjLFYkp4W4sEAxCjFG9oD3smfhvV6yQnNmiJyexbLdu"
                    name="Apple Coin"
                    size={24}
                    borderRadius="50%"
                    icon={iconInvoke}
                    iconLabel="Smart asset"
                    iconVisible={true}
                    popperOptions={{}}
                    width={30}
                />
            </Box>
        </Flex>
    </ThemeProvider>
));
