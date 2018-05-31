"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const admin = require("firebase-admin");
class FirebaseHelper {
    /**
     * Initialize Firebase App
     *
     * @param {any} serviceAccount
     * @param {any} databaseURL
     */
    initializeApp(serviceAccount, databaseURL) {
        admin.initializeApp({
            credential: admin.credential.cert(serviceAccount),
            databaseURL: databaseURL
        });
        return { 'firestore': admin.firestore() };
    }
    /**
     * Get User Info though UserId
     *
     * @param {string} userId
     * @returns {Promise<any>}
     */
    getUserbyId(userId) {
        return admin.auth().getUser(userId)
            .then(user => user)
            .catch(error => console.log(error));
    }
    /**
     * Get User Info though email
     *
     * @param {string} email
     * @returns {Promise<any>}
     * @memberof FirebaseHelper
     */
    getUserbyEmail(email) {
        return admin.auth().getUserByEmail(email)
            .then(user => user)
            .catch(error => console.log(error));
    }
    /**
     * Get User Info though phone number
     *
     * @param {string} phone
     * @returns {Promise<any>}
     * @memberof FirebaseHelper
     */
    getUserbyPhone(phone) {
        return admin.auth().getUserByPhoneNumber(phone)
            .then(user => user)
            .catch(error => console.log(error));
    }
    /**
     * Delete user from an Array of User Ids
     *
     * @param {Array<string>} userIds
     * @memberof FirebaseHelper
     */
    deleteUsers(userIds) {
        userIds.map(userId => {
            admin.auth().deleteUser(userId)
                .then(() => {
                console.log("Successfully deleted user: ", userId);
            })
                .catch(error => console.log(error));
        });
    }
    /**
     * Create a new user
     *
     * @param {Object} userInfo
     * @memberof FirebaseHelper
     */
    createUser(userInfo) {
        admin.auth().createUser(userInfo)
            .then(function (userRecord) {
            console.log("Successfully created new user:", userRecord.uid);
        })
            .catch(function (error) {
            console.log("Error creating new user:", error);
        });
    }
    /**
     * Update user Info though userId
     *
     * @param {string} userId
     * @param {Object} userInfo
     * @memberof FirebaseHelper
     */
    updateUser(userId, userInfo) {
        admin.auth().updateUser(userId, userInfo)
            .then(function (userRecord) {
            console.log("Successfully updated user", userRecord.toJSON());
        })
            .catch(function (error) {
            console.log("Error updating user:", error);
        });
    }
}
exports.FirebaseHelper = FirebaseHelper;
//# sourceMappingURL=firebase.js.map