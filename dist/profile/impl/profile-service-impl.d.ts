import { AcceptTermsConditionRequest, GenerateOtpRequest, GetAllProfileRequest, IsProfileAlreadyInUseRequest, LocationSearchCriteria, Profile, ProfileService, ProfileServiceConfig, ProfileSession, ProfileSource, ServerProfile, ServerProfileDetailsRequest, ServerProfileSearchCriteria, UpdateServerProfileInfoRequest, VerifyOtpRequest } from '..';
import { DbService } from '../../db';
import { Observable } from 'rxjs';
import { TenantInfo } from '../def/tenant-info';
import { ApiService } from '../../api';
import { CachedItemStore, KeyValueStore } from '../../key-value-store';
import { ContentAccessFilterCriteria } from '../def/content-access-filter-criteria';
import { ContentAccess } from '../def/content-access';
import { ProfileExistsResponse } from '../def/profile-exists-response';
import { LocationSearchResult } from '../def/location-search-result';
import { SharedPreferences } from '../../util/shared-preferences';
export declare class ProfileServiceImpl implements ProfileService {
    private profileServiceConfig;
    private dbService;
    private apiService;
    private cachedItemStore;
    private keyValueStore;
    private sharedPreferences;
    private static readonly KEY_USER_SESSION;
    constructor(profileServiceConfig: ProfileServiceConfig, dbService: DbService, apiService: ApiService, cachedItemStore: CachedItemStore<ServerProfile>, keyValueStore: KeyValueStore, sharedPreferences: SharedPreferences);
    createProfile(profile: Profile, profileSource?: ProfileSource): Observable<Profile>;
    deleteProfile(uid: string): Observable<undefined>;
    updateProfile(profile: Profile): Observable<Profile>;
    updateServerProfile(updateUserInfoRequest: UpdateServerProfileInfoRequest): Observable<Profile>;
    getServerProfiles(searchCriteria: ServerProfileSearchCriteria): Observable<ServerProfile[]>;
    getTenantInfo(): Observable<TenantInfo>;
    getAllProfiles(profileRequest?: GetAllProfileRequest): Observable<Profile[]>;
    getServerProfilesDetails(serverProfileDetailsRequest: ServerProfileDetailsRequest): Observable<ServerProfile>;
    getActiveSessionProfile(): Observable<Profile>;
    setActiveSessionForProfile(profileUid: string): Observable<boolean>;
    getActiveProfileSession(): Observable<ProfileSession | undefined>;
    acceptTermsAndConditions(acceptTermsConditions: AcceptTermsConditionRequest): Observable<boolean>;
    isProfileAlreadyInUse(isProfileAlreadyInUseRequest: IsProfileAlreadyInUseRequest): Observable<ProfileExistsResponse>;
    generateOTP(generateOtpRequest: GenerateOtpRequest): Observable<boolean>;
    verifyOTP(verifyOTPRequest: VerifyOtpRequest): Observable<boolean>;
    searchLocation(locationSearchCriteria: LocationSearchCriteria): Observable<LocationSearchResult>;
    getAllContentAccess(criteria: ContentAccessFilterCriteria): Observable<ContentAccess[]>;
    private mapDbProfileEntriesToProfiles;
}
