/*
 *  用户信息
 */
import Global from './Global'
import DataUtil from './DataUtil'

let UserUtil = {
    sid(param) {
        if (undefined == param) {
            return Global.storage.get("adminSid");
        } else if (param) {
            Global.storage.set("adminSid", param);
        } else {
            Global.storage.clear("adminSid");
        }
    },
    uid(param) {
        if (undefined == param) {
            return Global.storage.get("adminUid");
        } else if (param) {
            Global.storage.set("adminUid", param);
        } else {
            Global.storage.clear("adminUid");
        }
    },
    account(param) {
        if (undefined == param) {
            return Global.storage.get('adminAccount')
        } else if (param) {
            Global.storage.set("adminAccount", param);
        } else {
            Global.storage.clear("adminAccount");
        }
    },
    name(param) {
        if (undefined == param) {
            return Global.storage.get('adminName')
        } else if (param) {
            Global.storage.set("adminName", param);
        } else {
            Global.storage.clear("adminName");
        }
    },
    permission(param) {
        if (undefined == param) {
            return DataUtil.stringToJson(Global.storage.get('adminPermission'))
        } else if (param) {
            Global.storage.set("adminPermission", DataUtil.jsonToString(param));
        } else {
            Global.storage.clear("adminPermission");
        }
    }
}

export default UserUtil
