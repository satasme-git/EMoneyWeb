package satasme.promo.web.repository;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.hibernate.Criteria;
import org.hibernate.Session;
import org.hibernate.criterion.Restrictions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;

import satasme.promo.web.entity.Orders;
import satasme.promo.web.entity.User;
import satasme.promo.web.entity.UserPayments;
import satasme.promo.web.entity.VideoUpload;

public class UserPaymentRepositoryImpl implements UserPaymentRepositoryCustom{

	@Autowired
	private UploadVideoRepository uploadVideoRepository;
	@PersistenceContext
	protected EntityManager em;
	
	@Override
	public String findUserPaymentTotal(long userid) {
		Criteria cr = em.unwrap(Session.class).createCriteria(User.class);
		cr.add(Restrictions.eq("id", userid));
		User crruser = (User) cr.uniqueResult();
		
		Criteria crup = em.unwrap(Session.class).createCriteria(UserPayments.class);
		crup.add(Restrictions.eq("user", crruser));

		double total=0;
		if (crup.list().isEmpty()) {
			total=0;
		}else {
			List<UserPayments> list = crup.list();
			for (UserPayments up : list) {
				total+=Double.parseDouble(up.getAmount());
			}
		}
		
		return String.valueOf(total);
	}

	@Override
	public List<UserPayments> findUserPaymentList(long userid) {
		Criteria cr = em.unwrap(Session.class).createCriteria(User.class);
		cr.add(Restrictions.eq("id", userid));
		User crruser = (User) cr.uniqueResult();
		
		Criteria crup = em.unwrap(Session.class).createCriteria(UserPayments.class);
		crup.add(Restrictions.eq("user", crruser));
		
		List<UserPayments> up_list=new ArrayList();
		if (!crup.list().isEmpty()) {
			up_list = crup.list();
			
		}
		
		return up_list;
	}

}
